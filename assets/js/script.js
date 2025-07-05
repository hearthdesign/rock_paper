const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const winningMove = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
};

let playerScore= 0;
let computerScore= 0;

const resultElement = document.getElementById("result");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");

const playerChoiceImg = document.getElementById("playerChoice");
const computerChoiceImg = document.getElementById("computerChoice");

const resetButton = document.getElementById("reset-btn");

const moveButtons = document.querySelectorAll(".move-button");

moveButtons.forEach(button => { 
    button.addEventListener("click", () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        
        updateImgs(playerChoice, computerChoice);
        const result = checkWinner(playerChoice, computerChoice);
        showResult( playerChoice, computerChoice, result);
        updateScores(result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(player, computer) {
  if (player === computer) return 'draw';
  else if (winningMove[player].includes(computer)) return 'win';
  else return 'lose';
}

function updateImgs(playerChoice, computerChoice) {
    playerChoiceimg.src = `assets/images/${playerChoice}.png`;
    computerChoiceimg.src = `assets/images/${computerChoice}.png`;
    playerChoiceimg.alt = player;
    computerChoiceimg.alt = computer;
}

function showResult(player, computer, result) {
    let message = "You chose ${player}, Opponent chose ${computer}. ";
    if (result === 'win') 
        message += "YOU WIN!";
     else if (result === 'lose') 
        message += "YOU LOSE!";
     else 
        message += "IT'S A TIE!";
    
    resultEl.innerHTML = msg;
    }

    function updateScore(result) {
  if (result === 'win') {
    playerScore++;
  } else if (result === 'lose') {
    computerScore++;
  }
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

