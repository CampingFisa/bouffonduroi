export class User {
  id: string;
  name: string;
  playerIcon: string; // URL or path to the image

  constructor(id: string, name: string, playerIcon: string) {
    this.id = id;
    this.name = name;
    this.playerIcon = playerIcon;
  }
}
