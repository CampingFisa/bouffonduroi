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

  // URL de l'API
  private baseUrl = 'http://localhost:8081/api/users';


  constructor(private http: HttpClient, private router: Router) {}

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

  // Fonction pour se connecter
  login() {
    const loginParams = {
      email: this.email,
      password: this.password,
    };

    this.http
      .post(`${this.baseUrl}/login`, null, {
        params: loginParams,
        responseType: 'text' // Indique que la réponse sera du texte brut
      })
      .subscribe({
        next: (token: string) => {
          this.email = '';
          this.password = '';
          console.log('Connexion réussie ! Token :', token);
          this.router.navigate(['/']).then(r => console.log('Redirection vers la page d\'accueil'));
        },
        error: (err) => {
          console.error('Erreur lors de la connexion :', err);
          if (err.status === 400) {
            // Redirection vers une page spécifique pour une mauvaise requête
            this.router.navigate(['/bad-request']).then(r => console.log('Bad request'));
          }else if (err.status === 401) {
            // Effacer les champs et afficher un message d'erreur
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


  // Fonction pour s'inscrire
  register() {
    if (this.password !== this.confirmPassword) {
      console.error('Les mots de passe ne correspondent pas.');
      return;
    }

    const registerBody = {
      username: this.username,
      email: this.email,
      address: '', // Optionnel, à personnaliser si nécessaire
    };

    const queryParams = { password: this.password };

    this.http
      .post(`${this.baseUrl}/register`, registerBody, { params: queryParams })
      .subscribe({
        next: () => {
          this.email = '';
          this.password = '';
          this.username = '';
          this.confirmPassword = '';
          console.log('Inscription réussie !');
          this.router.navigate(['/login']).then(r => console.log('Redirection vers la page de connexion'));
        },
        error: (err) => {
          console.error('Erreur lors de l\'inscription :', err);
          if (err.status === 400) {
            // Redirection vers une page spécifique pour une mauvaise requête
            this.router.navigate(['/bad-request']).then(r => console.log('Bad request'));
          } else if (err.status === 409) {
            // Effacer les champs et afficher un message d'erreur
            this.email = '';
            this.password = '';
            this.username = '';
            this.confirmPassword = '';
            this.errorMessage = 'Un compte existe déjà avec cet email.';
            this.showErrorDialog = true;
          } else if (err.status === 500) {
            // Redirection vers une page spécifique pour une erreur serveur
            this.router.navigate(['/server-error']).then(r => console.log('Server error'));

          } else if (err.status == 403) {
            // Redirection vers une page spécifique pour une erreur de permission
            this.router.navigate(['/forbidden']).then(r => console.log('Forbidden'));
          } else {
            console.error('Erreur inattendue lors de l\'inscription :', err);
          }
        },
      });
  }
}
