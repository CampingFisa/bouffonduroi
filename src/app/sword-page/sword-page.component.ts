import { Component } from '@angular/core';

@Component({
  selector: 'app-sword-page',
  standalone: true,
  imports: [],
  templateUrl: './sword-page.component.html',
  styleUrl: './sword-page.component.scss'
})
export class SwordPageComponent {
// Liste des combattants
fighters = [
  { name: 'Aurélien', image: 'assets/king.png' },
  { name: 'Léo', image: 'assets/img/peasant.png' },
  { name: 'Aladin', image: 'assets/stupid_knight.png' },
  { name: 'Elena', image: 'assets/king.png' },
];

// Paramètres des rounds et jokers
rounds = [3, 4, 5];
jokers = [0, 1, 2];

// Sélections utilisateur
selectedRound = 4;
selectedJoker = 1;
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
