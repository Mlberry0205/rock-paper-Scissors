class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token
    this.win = 0;
    this.type = "Classic"
    this.icons = ["rock", "paper", "scissors"]
    this.currentChoice = ""

  }
}

takeTurn(event) {
    this.currentChoice = event.target.id
  }
