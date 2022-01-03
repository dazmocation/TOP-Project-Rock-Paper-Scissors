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
function playRound(playerSelection, computerPlay) {
    // scissors beats paper
    // player scissors AND computer has paper OR player has paper AND computer has scissors
    console.log(playerSelection, computerPlay);
    if (playerSelection.toLowerCase() === "scissors" && computerPlay === "paper" || playerSelection.toLowerCase() === "paper" && computerPlay === "scissors") {
        if (playerSelection === "scissors") {
            console.log("You win! Scissors beats Paper!")
        }
        else {
            console.log("You lose! Scissors beats Paper!")
        }
    }
}

// scissors beats paper
    // player scissors AND computer has paper OR player has paper AND computer has scissors
    if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        if (playerSelection === "scissors") {
            console.log("You win! Scissors beats Paper!")
        }
        else {
            console.log("You lose! Scissors beats Paper!")
        }
    }
// paper beats rock
// rock beats scissors
// samesies