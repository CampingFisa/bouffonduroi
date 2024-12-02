export class GameStatus {
  id: string;
  lastPlayed: Date;
  playerIcon: string; // URL or path to the image
  playerName: string;
  myScore: number;
  theirScore: number;
  isMyTurn: boolean;
  isFinished: boolean;

  constructor(id: string, lastPlayed: Date, playerIcon: string, playerName: string, myScore: number, theirScore: number, isMyTurn: boolean, isFinished: boolean) {
    this.id = id;
    this.lastPlayed = lastPlayed;
    this.playerIcon = playerIcon;
    this.playerName = playerName;
    this.myScore = myScore;
    this.theirScore = theirScore;
    this.isMyTurn = isMyTurn;
    this.isFinished = isFinished;
  }
}
