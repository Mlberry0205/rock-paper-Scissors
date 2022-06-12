class Game {
  construtor() {
    this.type = type;
    this.icons = [];
    this.human = new Player("HUMAN!")
    this.computer = new Player("COMPUTER");
    this.humanChoice = humanChoice;
    this.computerChoice = computerChoice
    this.winner;
  }
}

 selectWinner() {
  if (this.humanChoice === this.computerChoice) {
    this.winner = "Tie";
  }

  if (this.humanChoice === "rock" && this.computerChoice === "scissors") {
    this.winner = "Human";
  }

  if (this.humanChoice === "scissors" && this.computerChoice === "paper") {
    this.winner = "Human";
  }

  if (this.humanChoice === "paper" && this.computerChoice === "rock") {
    this.winner = "Human";
  }

  if (this.humanChoice === "scissors" && this.computerChoice === "rock") {
    this.winner = "Human";
  }

  if (this.humanChoice === "paper" && this.computerChoice === "scissors") {
    this.winner = "COMPUTER";
  }

  if (this.humanChoice === "rock" && this.computerChoice === "paper") {
    this.winner = "COMPUTER";
  }
    return  this.winner;
};
