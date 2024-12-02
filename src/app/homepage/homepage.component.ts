import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {PanelAmisComponent} from '../panel-amis/panel-amis.component';
import {GameStatus} from '../models/game-status.model';
import {GameService} from '../services/game.service';
import {GameStatusComponent} from '../game-status/game-status.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PanelAmisComponent,
    GameStatusComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  games: GameStatus[] = [];
  onHoldGames: GameStatus[] = [];
  finishedGames: GameStatus[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe((games) => {
      this.games = games;
    });

    this.gameService.getOnHoldGames().subscribe((games) => {
      this.onHoldGames = games;
    });

    this.gameService.getFinishedGames().subscribe((games) => {
      this.finishedGames = games;
    })
  }

}
