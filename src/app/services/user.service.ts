import {User} from '../models/user.model';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: crypto.randomUUID().substring(0,8),
      name: 'Maxou',
      playerIcon: 'assets/img/knight.png',
    },
    {
      id: crypto.randomUUID().substring(0,8),
      name: 'Nico',
      playerIcon: 'assets/img/farmer.png',
    },
    {
      id: crypto.randomUUID().substring(0,8),
      name: 'Papito',
      playerIcon: 'assets/img/king.png',
    },
    {
      id: crypto.randomUUID().substring(0,8),
      name: 'Elo',
      playerIcon: 'assets/img/stupid_knight.png',
    },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
