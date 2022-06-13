class Game {
  construtor() {
    this.type = "CLASSIC" || "DIFFICULT"
    this.icons = [];
    this.humanChoice = new Player("HUMAN!")
    this.computerChoice = new Player("COMPUTER");
    this.winner = null;
  }

  chooseIcons() {
    if (this.type === "CLASSIC") {
      this.icons = ["rock", "paper", "scissors"]
    } else if(this.type === "DIFFICULT") {
      this.icons = ["rock", "paper", "scissors", "alien", "lizard"]
    }
  }
}

function getCpuChoice() {
  this.computerChoice.currentChoice = Math.floor(Math.random() * 3);
  return computerChoice[randomNumber];
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
    return this.winner;
};
