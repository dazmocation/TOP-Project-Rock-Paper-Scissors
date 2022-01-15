//Define Game Buttons
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const gameInfo = document.getElementById('results');
const playerThrow = document.getElementById('playerSelection');
const computerThrow = document.getElementById('computerSelection');
const newGameButton = document.getElementsByClassName('newGame');
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');

//Set starting scores
let playerScore = 0;
let computerScore = 0;
let gameOn = 0

//Computer throws
function randomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random(Date.now()) * (max - min + 1) + min);
}

function computerChoice() {
    computerSelection = randomValue(0,2)
    if (computerSelection === 0) {
        computerThrow.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/raised-fist_270a.png" alt="Rock"><p>ROCK</p>';
        return "rock";
    }
    else if (computerSelection === 1) {
        computerThrow.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/raised-hand_270b.png" alt="Paper"><p>PAPER</p>';
        return "paper";
    }
    else {
        computerThrow.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/victory-hand_270c-fe0f.png" alt="Scissors"><p>SCISSORS</p>';
        return "scissors";
    }
}

//Player selection logic
newGameButton[0].addEventListener('click',function() {
    newGame();
});

gameInfo.addEventListener('click',function(e) {
    if (e.target.classList.contains('newGame')) {
        newGame();
    }
});

rock.addEventListener('click', function() {
    if (gameOn === 1) {
        playerThrow.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/raised-fist_270a.png" alt="Rock"><p>ROCK</p>';
        playRound("rock",computerChoice());
    }
});

paper.addEventListener('click', function() {
    if (gameOn === 1) {
        playerThrow.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/raised-hand_270b.png" alt="Paper"><p>PAPER</p>';
        playRound("paper",computerChoice());
    }
});

scissors.addEventListener('click', function() {
    if (gameOn === 1) {
        playerThrow.innerHTML = '<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/victory-hand_270c-fe0f.png" alt="Scissors"><p>SCISSORS</p>';
        playRound("scissors",computerChoice());
    }
});

function newGame() {
    gameOn = 1;
    playerScore = 0;
    computerScore = 0;
    playerThrow.innerHTML = '';
    computerThrow.innerHTML = '';
    playerDisplay.innerText = playerScore;
    computerDisplay.innerText = computerScore;
    gameInfo.innerText = "Chose your throw";
}

function endGame(playerScore, computerScore) {
    playerDisplay.innerText = playerScore;
    computerDisplay.innerText = computerScore;
    if (playerScore === 5) {
        gameOn = 0;
        gameInfo.innerHTML = 'Congratulations! You\'ve won! Play again?' + '<p><button class="newGame">START A NEW GAME</button></p>';
    }
    else if (computerScore === 5) {
        gameOn = 0;
        gameInfo.innerHTML = 'Oh no! You\'ve lost! Play again?' + '<p><button class="newGame">START A NEW GAME</button></p>';
    }
}

//Play a round
function playRound(playerChoice,computerChoice) {
    if (playerChoice === computerChoice) {
        gameInfo.innerText = 'You both threw ' + playerChoice + '! Try again!';
    }
    else if (playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "scissors" && computerChoice === "paper"
        || playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        gameInfo.innerText = playerChoice + ' beats ' + computerChoice + '! You win the round!';
    }
    else {
        computerScore++;
        gameInfo.innerText = playerChoice + ' loses to ' + computerChoice + '! You lost the round!';
    }
    endGame(playerScore, computerScore);
}
