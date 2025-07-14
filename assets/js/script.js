// Define valid choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
// Define the moves each choices can defeat
const winningMove = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]
};

// Initialize scores
let playerScore= 0;
let computerScore= 0;

const resultElement = document.getElementById("result");
const playerScoreElement = document.getElementById("playerScore");
const computerScoreElement = document.getElementById("computerScore");

const playerChoiceImg = document.getElementById("playerChoice");
const computerChoiceImg = document.getElementById("computerChoice");

const moveButtons = document.querySelectorAll(".moveButton");

// Sound effects
const sounds = {
    win: new Audio("assets/sounds/win.mp3"),
    menu: new Audio("assets/sounds/menu.mp3"),
    reset: new Audio("assets/sounds/reset.mp3"),
    select: new Audio("assets/sounds/select.mp3"),
    click: new Audio("assets/sounds/click.mp3")
};

const menuLinks = document.querySelectorAll(".menuSound");
// Sound play for each Button in Nav menu
menuLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    if (!soundEnabled) return;
    e.preventDefault(); // Prevent immediate navigation
    playSound('menu');

    // Wait for sound to play before redirecting
    setTimeout(() => {
      window.location.href = this.href;
    }, 330); // Match the sound length (ms)
  });
});

// Add event listener "click" to each moveButton
moveButtons.forEach(button => { 
    button.addEventListener("click", () => {
        playSound("click");
        // Update both playersChoices-object based on button data attributes
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        // Update the UI to reflect the selected Movements and scores and shows the result
        updateImgs(playerChoice, computerChoice);
        const result = checkWinner(playerChoice, computerChoice);
        showResult( playerChoice, computerChoice, result);
        updateScore(result);
    });
});

let soundEnabled = true;

// Runs after the page fully loads
window.onload = function () {
  const toggleSoundBtn = document.getElementById("toggle-sound");
//  Only add the event listener if the button is found
  if (toggleSoundBtn) {
    toggleSoundBtn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      toggleSoundBtn.textContent = soundEnabled ? "🔊 Sound: ON" : "🔇 Sound: OFF";
    });
  }
};


// Enable sound 
function playSound(type) {
    if (soundEnabled && sounds[type]) {
        sounds[type].currentTime = 0;
        sounds[type].play();
    }
}


let selectedOpponent = {
  name: "Opponent",
  image: "assets/images/defaultOpponent.png",
  folder: "default",
};

const opponentButtons = document.querySelectorAll(".opponentButton");
const opponentAvatar = document.getElementById("opponentAvatar");
const opponentNameDisplay = document.getElementById("opponentName");

// updates the opponent's avatar and name when a button is clicked
opponentButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Update the selectedOpponent object based on button data attributes
    selectedOpponent.name = button.dataset.name;
    selectedOpponent.image = `assets/images/${button.dataset.img}`;
    selectedOpponent.folder = button.dataset.name;

    // Update the UI to reflect the selected opponent
    opponentNameDisplay.textContent = selectedOpponent.name;
    opponentAvatar.src = selectedOpponent.image;
    opponentAvatar.alt = selectedOpponent.name;
    playSound("select");
  });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function checkWinner(player, computer) {
  if (player === computer) return 'draw';
  else if (winningMove[player].includes(computer)) return 'win';
  else return 'lose';
}

// Update images for player and computer chosen moves
function updateImgs(playerChoice, computerChoice) {
    playerChoiceImg.src = `assets/images/player/${playerChoice}.png`;
    computerChoiceImg.src = `assets/images/${selectedOpponent.folder}/${computerChoice}.png`;
    playerChoiceImg.alt = playerChoice;
    computerChoiceImg.alt = computerChoice;
}

// display the result
function showResult(player, computer, result) {
    let message = `You chose ${player}, ${selectedOpponent.name} chose ${computer}.`;
    if (result === 'win') {
        message += " YOU WIN!";
        playSound("win");
      }
     else if (result === 'lose') {
        message += " YOU LOSE!";
        playSound("lose");}
     else {
        message += " IT'S A TIE!";}
    
    resultElement.innerHTML = message;
    }
// Update the score based on the result
    function updateScore(result) {
  if (result === 'win')
    playerScore++;
   else if (result === 'lose')
    computerScore++;
    // Update the score display
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

/* 
  Reset the game – Fix runtime error by checking if 'reset-btn' exists before adding the listener.
  The code runs only on pages where the reset button is present.
  Also resets scores, result text, player/computer choices, and opponent display.
*/
const resetBtn = document.getElementById('resetBtn')
// Only add the listener if the button exists on the page
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
  playSound("reset");
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = '0';
  computerScoreElement.textContent = '0';
  resultElement.textContent = '';
  playerChoiceImg.src = 'assets/images/placeholderMove.png';
  computerChoiceImg.src = 'assets/images/placeholderMove.png';


    // Reset opponent image and name display
  opponentAvatar.src = "assets/images/defaultOpponent.png";  // Reset to default
  opponentAvatar.alt = "Default Opponent";
  opponentNameDisplay.textContent = 'Mad Robot';
  
  // Reset image and name of the selected opponent
  selectedOpponent = {
    name: "",
    image: "",
    folder: "default",};
});
}