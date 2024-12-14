import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const token = sessionStorage.getItem('authToken'); // Vérifier si le token est dans le sessionStorage
    if (token) {
      return true; // Autoriser l'accès
    } else {
      // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
      return this.router.createUrlTree(['/login']);
    }
  }
}
