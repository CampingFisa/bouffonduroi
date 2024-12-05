import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import * as CryptoJS from 'crypto-js';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    FormsModule,
    PasswordModule,
    InputTextModule,
    Button,
    NgIf,
    FloatLabelModule,
    DialogModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  isLoginMode = true;
  email = '';
  password = '';
  username = '';
  confirmPassword = '';
  errorMessage = '';
  showErrorDialog: boolean = false;
  hashedPassword: string = '';

  // URL de l'API
  private baseUrl = 'http://localhost:8081/api/users';


  constructor(private http: HttpClient, private router: Router, private authService: AuthenticateService) {}

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = '';
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.login();
    } else {
      this.register();
    }
  }

  // Fonction de hachage sans salt
  hashPassword(password: string): string {
    // Utilisation de SHA-256 pour un hachage déterministe
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  }

  // Fonction pour se connecter
  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (token: string) => {
        this.authService.saveToken(token); // Sauvegarder le token
        this.email = '';
        this.password = '';
        console.log('Connexion réussie ! Token :', token);
        this.router.navigate(['/']).then(() => console.log('Redirection vers la page d\'accueil'));
      },
      error: (err) => {
        console.error('Erreur lors de la connexion :', err);
        if (err.status === 401) {
          this.email = '';
          this.password = '';
          this.errorMessage = 'Identifiant ou mot de passe incorrect.';
          this.showErrorDialog = true;
        } else {
          console.error('Erreur inattendue lors de la connexion :', err);
        }
      },
    });
  }


  // Sauvegarde du token
  private saveToken(token: string) {
    sessionStorage.setItem('authToken', token); // Utilise sessionStorage pour la session en cours
  }

  // Récupération du token
  public getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }

  // Fonction pour s'inscrire
  // TODO : enlever l'ignore
  register() {
    // @ts-ignore
    this.authService.register(this.username, this.email, this.password, this.confirmPassword).subscribe({
      next: () => {
        this.email = '';
        this.password = '';
        this.username = '';
        this.confirmPassword = '';
        console.log('Inscription réussie !');
        this.router.navigate(['/login']).then(() => console.log('Redirection vers la page de connexion'));
      },
      error: (err) => {
        console.error('Erreur lors de l\'inscription :', err);
        this.handleError(err);
      },
    });
  }

  // Gestion des erreurs
  private handleError(err: any) {
    if (err.status === 400) {
      this.router.navigate(['/bad-request']).then(() => console.log('Bad request'));
    } else if (err.status === 401) {
      this.email = '';
      this.password = '';
      this.errorMessage = 'Identifiant ou mot de passe incorrect.';
      this.showErrorDialog = true;
    } else if (err.status === 409) {
      this.errorMessage = 'Un compte existe déjà avec cet email.';
      this.showErrorDialog = true;
    } else if (err.status === 500) {
      this.router.navigate(['/server-error']).then(() => console.log('Server error'));
    } else if (err.status === 403) {
      this.router.navigate(['/forbidden']).then(() => console.log('Forbidden'));
    } else {
      console.error('Erreur inattendue :', err);
    }
  }


}
