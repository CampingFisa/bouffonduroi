import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {PanelAmisComponent} from '../panel-amis/panel-amis.component';
import {GameStatusComponent} from '../game-status/game-status.component';
import {GameStatus} from '../models/game-status.model';

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
export class HomepageComponent {
  MaxouGame: GameStatus = {
    lastPlayed: new Date(),
    playerIcon: 'assets/img/knight.png',
    playerName: "Maxou",
    myScore: 5,
    theirScore: 4,
    isMyTurn: true,
    isFinished: false
  };
  NicoGame: GameStatus = {
    lastPlayed: new Date(),
    playerIcon: 'assets/img/farmer.png',
    playerName: "Nico",
    myScore: 5,
    theirScore: 4,
    isMyTurn: true,
    isFinished: false
  };
  PapitoGame: GameStatus = {
    lastPlayed: new Date(),
    playerIcon: 'assets/img/king.png',
    playerName: "Papito",
    myScore: 5,
    theirScore: 4,
    isMyTurn: true,
    isFinished: false
  };
}
