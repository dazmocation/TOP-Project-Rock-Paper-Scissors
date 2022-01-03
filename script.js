// Generates computer's play
function computerPlay() {
    computerSelection = randomValue(0,2)
    if (computerSelection === 0) {
        return "rock";
    }
    else if (computerSelection === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
// Computer randomizer
function randomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random(Date.now()) * (max - min + 1) + min);
}
// Plays a round of the game
function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerChoice = computerPlay();
    // scissors beats paper
    if (playerSelection === "scissors" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "scissors") {
        if (playerSelection === "scissors") {
            console.log("You win! Scissors beats Paper!")
            return 1;
        }
        else {
            console.log("You lose! Scissors beats Paper!")
            return -1;
        }
    }
    // paper beats rock
    else if (playerSelection === "rock" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "rock") {
        if (playerSelection === "rock") {
            console.log("You lose! Paper beats Rock!")
            return -1;
        }
        else {
            console.log("You win! Paper beats Rock!")
            return 1;
        }
    }
    // rock beats scissors
    else if (playerSelection === "rock" && computerChoice === "scissors" || playerSelection === "scissors" && computerChoice === "rock") {
        if (playerSelection === "rock") {
            console.log("You win! Rock beats Scissors!")
            return 1;
        }
        else {
            console.log("You lose! Rock beats Scissors!")
            return -1;
        }
    }
    // samesies
    else {
        console.log("You both chose " + playerSelection + ". Try again!");
        return 0;
    }
}

function game() {
    let score = 0
    console.log("Let's play a game! Best of 5 wins!")
    for (let i = 0; i < 5; i++) {
        score = score + playRound(prompt("What do you want to play? Rock / Paper / Scissors"));
    }
    if (score > 0) {
        console.log("Congratulations! You win!")
    }
    else if (score <0) {
        console.log("Sorry! You lose!")
    }
    else {
        console.log("Oops! You tied! Try again!")
    }
}