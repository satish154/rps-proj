const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const resultMessage = document.querySelector("#result-message");
const stoneButton = document.querySelector("#stone");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const rulesButton = document.querySelector("#rules-button");
const rulesPopup = document.querySelector("#rules-popup");
const closeButton = document.querySelector("#close-button");

let playerScoreValue = 0;
let computerScoreValue = 0;

const play = (playerChoice) => {
  const computerChoice = Math.random() < 0.33 ? "stone" : (Math.random() < 0.5 ? "paper" : "scissors");
  if (playerChoice === "stone") {
    if (computerChoice === "scissors") {
      resultMessage.textContent = "You win! Stone beats Scissors.";
      playerScoreValue++;
    } else if (computerChoice === "paper") {
      resultMessage.textContent = "You lose. Paper beats Stone.";
      computerScoreValue++;
    } else {
      resultMessage.textContent = "Draw.";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "stone") {
      resultMessage.textContent = "You win! Paper beats Stone.";
      playerScoreValue++;
    } else if (computerChoice === "scissors") {
      resultMessage.textContent = "You lose. Scissors beats Paper.";
      computerScoreValue++;
    } else {
      resultMessage.textContent = "Draw.";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      resultMessage.textContent = "You win! Scissors beats Paper.";
      playerScoreValue++;
    } else if (computerChoice === "stone") {
      resultMessage.textContent = "You lose. Stone beats Scissors.";
      computerScoreValue++;
    } else {
      resultMessage.textContent = "Draw.";
    }
  }
  playerScore.textContent = `Player: ${playerScoreValue}`;
  computerScore.textContent = `Computer: ${computerScoreValue}`;
};

stoneButton.addEventListener("click", () => play("stone"));
paperButton.addEventListener("click", () => play("paper"));
scissorsButton.addEventListener("click", () => play("scissors"));

rulesButton.addEventListener("click", () => {
  rulesPopup.style.display = "block";
});

closeButton.addEventListener("click", () => {
  rulesPopup.style.display = "none";
});
