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

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "IT'S A TIE!";
    } else if (winningMove[playerChoice].includes(computerChoice)) {
        return "YOU WIN!";
    }}