import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private baseUrl = 'http://localhost:8081/api/users'; // URL de l'API
  private hashedPassword: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  // Fonction de hachage sans salt
  hashPassword(password: string): string {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  }

  // Fonction pour se connecter
  login(email: string, password: string) {
    this.hashedPassword = this.hashPassword(password);
    const loginParams = new HttpParams().set('email', email).set('password', this.hashedPassword);

    return this.http.post(`${this.baseUrl}/login`, null, {
      params: loginParams,
      responseType: 'text', // Indique que la réponse sera du texte brut
    });
  }

  // Sauvegarde du token
  saveToken(token: string) {
    sessionStorage.setItem('authToken', token); // Utilise sessionStorage pour la session en cours
  }

  // Récupération du token
  getToken(): string | null {
    return sessionStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return this.getToken() != null; // Vérifie si le token existe
  }

  // Fonction pour s'inscrire
  register(username: string, email: string, password: string) {
    this.hashedPassword = this.hashPassword(password);

    const registerBody = {
      username: username,
      email: email,
      address: '', // Optionnel, à personnaliser si nécessaire
    };

    const queryParams = new HttpParams().set('password', this.hashedPassword);

    return this.http.post(`${this.baseUrl}/register`, registerBody, { params: queryParams });
  }

  // Déconnexion
  logout() {
    sessionStorage.removeItem('authToken'); // Retire le token
    this.router.navigate(['/login']);
  }
}
