class Game {
  constructor() {
    this.type = "";
    this.icons = [];
    this.human = new Player("human", "🙋");
    this.computer = new Player("computer", "💻");
    this.winner = "";
  }

  chooseIcons() {
    if (this.type === "classic") {
      this.icons = ["rock", "paper", "scissors"];
    } else if (this.type === "difficult") {
      this.icons = ["rock", "paper", "scissors", "alien", "lizard"];
    }
  }

  selectWinner() {
    if (this.human.currentChoice === "rock" && (this.computer.currentChoice === "scissors" || this.computer.currentChoice === "lizard")) {
      return this.winner = "human"
    } else if (this.human.currentChoice === "paper" && (this.computer.currentChoice === "rock" || this.computer.currentChoice === "alien")) {
      return this.winner = "human"
    } else if (this.human.currentChoice === "scissors" && (this.computer.currentChoice === "paper" || this.computer.currentChoice === "lizard")) {
      return this.winner = "human"
    } else if (this.human.currentChoice === "lizard" && (this.computer.currentChoice === "paper" || this.computer.currentChoice === "alien")) {
      return this.winner = "human"
    } else if (this.human.currentChoice === "alien" && (this.computer.currentChoice === "rock" || this.computer.currentChoice === "scissors")) {
      return this.winner = "human"
    } else {
      return this.winner = "computer"
    }
  }

  checkForDraw() {
    if (this.human.currentChoice === this.computer.currentChoice) {
      return this.winner = "";
    }
  }

  checkWin() {
    if (this.winner === "human") {
    this.human.win++
  } else if (this.winner === "computer") {
    this.computer.win++
  }
 }
}
