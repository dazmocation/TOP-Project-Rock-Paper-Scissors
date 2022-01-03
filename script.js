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
// Plays the game
function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    // scissors beats paper
    computerChoice = computerPlay();
    if (playerSelection === "scissors" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "scissors") {
        if (playerSelection === "scissors") {
            console.log("You win! Scissors beats Paper!")
        }
        else {
            console.log("You lose! Scissors beats Paper!")
        }
    }
    // paper beats rock
    else if (playerSelection === "rock" && computerChoice === "paper" || playerSelection === "paper" && computerChoice === "rock") {
        if (playerSelection === "rock") {
            console.log("You lose! Paper beats Rock!")
        }
        else {
            console.log("You win! Paper beats Rock!")
        }
    }
    // rock beats scissors
    else if (playerSelection === "rock" && computerChoice === "scissors" || playerSelection === "scissors" && computerChoice === "rock") {
        if (playerSelection === "rock") {
            console.log("You win! Rock beats Scissors!")
        }
        else {
            console.log("You lose! Rock beats Scissors!")
        }
    }
    // samesies
    else {
        console.log("You both chose " + playerSelection + ". Try again!");
    }
}