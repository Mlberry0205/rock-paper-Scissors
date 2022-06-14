class Game {
  constructor() {
    this.type = "";
    this.icons = [];
    this.human = new Player("human", "🙋");
    this.computer = new Player("computer", "💻");
    this.winner = null;
  }

  chooseIcons() {
    if (this.type === "classic") {
      this.icons = ["rock", "paper", "scissors"];
    } else if (this.type === "difficult") {
      this.icons = ["rock", "paper", "scissors", "alien", "lizard"];
    }
  }

  selectWinner() {
   if (
  (this.human.currentChoice === "rock" && this.computer.currentChoice === "scissors") ||
  (this.human.currentChoice === "rock" && this.computer.currentChoice === "lizard") ||
  (this.human.currentChoice === "paper" && this.computer.currentChoice=== "scissors") ||
  (this.human.currentChoice === "paper" && this.computer.currentChoice === "alien") ||
  (this.human.currentChoice === "scissors" && this.computer.currentChoice === "paper") ||
  (this.human.currentChoice === "scissors" && this.computer.currentChoice === "lizard") ||
  (this.human.currentChoice === "alien" && this.computer.currentChoice === "scissors") ||
  (this.human.currentChoice === "alien" && this.computer.currentChoice === "rock") ||
  (this.human.currentChoice === "lizrad" && this.computer.currentChoice === "paper") ||
  (this.human.currentChoice === "lizard" && this.computer.currentChoice === "alien")) {
    this.winner = true

} else {
  this.winner = false

}
}

checkForDraw() {
  if (this.human.currentChoice === this.computer.currentChoice) {
  this.winner = null

}
}

checkWin() {
  if (this.winner === true) {
    this.human.win++
  } else if (this.winner === false) {
    this.computer.win++
  }
}
}
