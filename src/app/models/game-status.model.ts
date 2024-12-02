export class GameStatus {
  lastPlayed: Date;
  playerIcon: string; // URL or path to the image
  playerName: string;
  myScore: number;
  theirScore: number;
  isMyTurn: boolean;
  isFinished: boolean;

  constructor(lastPlayed: Date, playerIcon: string, playerName: string, myScore: number, theirScore: number, isMyTurn: boolean, isFinished: boolean) {
    this.lastPlayed = lastPlayed;
    this.playerIcon = playerIcon;
    this.playerName = playerName;
    this.myScore = myScore;
    this.theirScore = theirScore;
    this.isMyTurn = isMyTurn;
    this.isFinished = isFinished;
  }
}
