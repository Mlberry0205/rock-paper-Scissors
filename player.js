class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token
    this.win = 0;
    this.type = "Classic"
    this.icons = ["rock", "paper", "scissors"]

  }
}


function getCpuChoice() {
  var choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return computerChoice[randomNumber];
}
