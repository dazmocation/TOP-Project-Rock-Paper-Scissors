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
/*
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
        console.log("You tied, because you both chose " + playerSelection + "!");
        return 0;
    }
}
*/
//scores the game
function scoreGame(score) {
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
/*plays 5 rounds
function game() {
    let score = 0;
    let rocks = 0;
    let papers = 0;
    let scissorss = 0;
    console.log("Let's play a game! Best of 5 wins!")
    for (let i = 0; i < 1000; i++) {
        score = score + playRound("rock");
        if (computerChoice === "rock") {
            rocks++;
        }
        else if (computerChoice === "paper") {
            papers++;
        }
        else {
            scissorss++;
        }
    }
    scoreGame(score);
    console.log(rocks + " " + papers + " " + scissorss);
}
*/


function playRound(playerChoice) {
    computerChoice = computerPlay();
    if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper") {
        return "win";
    }
    else if (computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "paper" && playerChoice === "rock" || computerChoice === "scissors" && playerChoice === "paper") {
        return "lose";
    }
    else {
        return "tie";
    }
}

//display to start a game
//click here to start
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let gameOn = true;
    //main game loop
    while (gameOn === true){
        //choose your throw
        const rock = document.getElementById("rock");
        rock.addEventListener('click',function(){
            playRound("rock");
            rock.style.borderColor = "yellow";
        });
        
        const paper = document.getElementById("paper");
        paper.addEventListener('click',function(){
            playRound("paper");
            paper.style.borderColor = "yellow";
        });
        
        const scissors = document.getElementById("scissors");
        scissors.addEventListener('click',function(){
            playRound("scissors");
            scissors.style.borderColor = "yellow";
        });
        //highlight the selection and insert into the player selection
        //run the computer's selection
        //compare the selections
        //score the round
        //record the score
        //display the result and offer next selection
    //when a score = 5, gameOn = false
        //display final score and result    
        //exit, offer to play again
    }
}

//select your play
//display your selection
//display computer's selection
//display results
//record results
//play next round x n until 5 wins
//display final results
//offer to start again