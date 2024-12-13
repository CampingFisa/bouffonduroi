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
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    PasswordModule,
    InputTextModule,
    Button,
    NgIf,
    FloatLabelModule,
    DialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  showErrorDialog: boolean = false;

  // URL de l'API
  private baseUrl = 'http://localhost:8081/api/users';


  constructor(private http: HttpClient, private router: Router, private authService: AuthenticateService) {}

  onSubmit() {
    this.login();
  }

  // Sauvegarde du token
  private saveToken(token: string) {
    sessionStorage.setItem('authToken', token); // Utilise sessionStorage pour la session en cours
  }

  // Récupération du token
  public getToken(): string | null {
    return sessionStorage.getItem('authToken');
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
      error: (err: any) => {
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

  goRegister() {
    this.router.navigate(['/register']).then(r => console.log('Redirection vers la page d\'inscription'));
  }
}
