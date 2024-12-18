import { Component, Input } from '@angular/core';
import { GameStatus } from '../models/game-status.model';

@Component({
  selector: 'app-game-status',
  standalone: true,
  imports: [],
  templateUrl: './game-status.component.html',
  styleUrl: './game-status.component.scss',
})
export class GameStatusComponent {
  @Input() gameStatus!: GameStatus;

  get playButtonText(): string {
    if (this.gameStatus.isFinished) {
      return 'REVOIR';
    }
    return this.gameStatus.isMyTurn ? 'JOUER' : 'VOIR';
  }

  get timeAgo(): string {
    const now = new Date();
    const diff = Math.round(
      (now.getTime() - new Date(this.gameStatus.lastPlayed).getTime()) /
        (1000 * 60 * 60 * 24)
    );
    return `${diff}j`;
  }
}
