import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgIf } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { AuthenticateService } from '../../services/authenticate.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    PasswordModule,
    InputTextModule,
    Button,
    NgIf,
    FloatLabelModule,
    DialogModule,
    LoginComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email = '';
  password = '';
  username = '';
  confirmPassword = '';
  errorMessage = '';
  showErrorDialog: boolean = false;

  constructor(private http: HttpClient, private router: Router, private authService: AuthenticateService) {}

  onSubmit() {
      this.register()
  }

  register() {
    if (this.password !== this.confirmPassword) {
      console.error('Les mots de passe ne correspondent pas.');
      this.password = '';
      this.confirmPassword = '';
      this.errorMessage = 'Les mots de passes ne correspondent pas.';
      this.showErrorDialog = true;
      return;
    }
    this.authService.register(this.username, this.email, this.password).subscribe({
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

  switchMode() {
    this.router.navigate(['/login']).then(() => console.log('Redirection vers la page de connexion'));
  }

  private handleError(err: any) {
    if (err.status === 400) {
      this.router.navigate(['/bad-request']).then(() => console.log('Bad request'));
    } else if (err.status === 401) {
      this.email = '';
      this.password = '';
      this.errorMessage = 'Identifiant ou mot de passe incorrect.';
      this.showErrorDialog = true;
    } else if (err.status === 409) {
      this.errorMessage = 'Un compte existe déjà avec cet email ou ce pseudo.';
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
