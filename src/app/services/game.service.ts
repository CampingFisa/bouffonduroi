import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameStatus } from '../models/game-status.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: GameStatus[] = [
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-30'),
      playerIcon: 'assets/img/knight.png',
      playerName: 'Maxou',
      myScore: 5,
      theirScore: 4,
      isMyTurn: true,
      isFinished: false,
    },
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-28'),
      playerIcon: 'assets/img/farmer.png',
      playerName: 'Nico',
      myScore: 3,
      theirScore: 6,
      isMyTurn: true,
      isFinished: false,
    },
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-25'),
      playerIcon: 'assets/img/king.png',
      playerName: 'Papito',
      myScore: 7,
      theirScore: 7,
      isMyTurn: true,
      isFinished: false,
    },
  ];

  private onHoldGames: GameStatus[] = [
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-30'),
      playerIcon: 'assets/img/stupid_knight.png',
      playerName: 'Elo',
      myScore: 4,
      theirScore: 3,
      isMyTurn: false,
      isFinished: false,
    },
  ];

  private finishedGames: GameStatus[] = [
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-21'),
      playerIcon: 'assets/img/stupid_knight.png',
      playerName: 'Elo',
      myScore: 2,
      theirScore: 6,
      isMyTurn: false,
      isFinished: true,
    },
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-19'),
      playerIcon: 'assets/img/farmer.png',
      playerName: 'Nico',
      myScore: 4,
      theirScore: 2,
      isMyTurn: false,
      isFinished: true,
    },
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-19'),
      playerIcon: 'assets/img/knight.png',
      playerName: 'Maxou',
      myScore: 10,
      theirScore: 2,
      isMyTurn: false,
      isFinished: true,
    },
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-18'),
      playerIcon: 'assets/img/stupid_knight.png',
      playerName: 'Elo',
      myScore: 5,
      theirScore: 1,
      isMyTurn: false,
      isFinished: true,
    },
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-18'),
      playerIcon: 'assets/img/farmer.png',
      playerName: 'Nico',
      myScore: 7,
      theirScore: 6,
      isMyTurn: false,
      isFinished: true,
    },
    {
      id : crypto.randomUUID().substring(0,8),
      lastPlayed: new Date('2024-11-17'),
      playerIcon: 'assets/img/knight.png',
      playerName: 'Maxou',
      myScore: 6,
      theirScore: 8,
      isMyTurn: false,
      isFinished: true,
    },
  ];

  getGames(): Observable<GameStatus[]> {
    return of(this.games);
  }

  getOnHoldGames(): Observable<GameStatus[]> {
    return of(this.onHoldGames);
  }

  getFinishedGames(): Observable<GameStatus[]> {
    return of(this.finishedGames);
  }
}
