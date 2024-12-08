import { Component } from '@angular/core';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-game-parameters',
  standalone: true,
  imports: [CommonModule, InputSwitchModule, FormsModule, ButtonModule],
  templateUrl: './game-parameters.component.html',
  styleUrl: './game-parameters.component.scss'
})
export class GameParametersComponent {
// Liste des combattants
fighters = [
  { name: 'Aurélien', image: 'assets/img/king.png' },
  { name: 'Léo', image: 'assets/img/peasant.png' },
  { name: 'Aladin', image: 'assets/img/stupid_knight.png' },
  { name: 'Elena', image: 'assets/img/king.png' },
];

// Paramètres des rounds et jokers
rounds = [
  3,
  4,
  5,
];

jokers = [
  0,
  1,
  2,
];

// Sélections par défaut
selectedRound = 4; // Défini par défaut
selectedJoker = 1; // Défini par défaut

includeOpenQuestions = false;


// Méthodes
setRound(round: number) {
  this.selectedRound = round;
}

setJoker(joker: number) {
  this.selectedJoker = joker;
}

startGame() {
  console.log('Lancer la partie avec les paramètres :', {
    round: this.selectedRound,
    joker: this.selectedJoker,
    includeOpenQuestions: this.includeOpenQuestions,
  });
}
}
