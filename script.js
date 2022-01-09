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
/*function scoreGame(score) {
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
*/
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
    rock.style.borderColor = "white";
    paper.style.borderColor = "white";
    scissors.style.borderColor = "white";
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

const newGameButton = document.getElementById("newGame");
newGameButton.addEventListener('click',function(){
    game();
});

//display to start a game
//click here to start
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let gameOn = true;
    //main game loop
    //display chose your throw
    while (gameOn === true){
        //choose your throw
        const rock = document.getElementById("rock");
        rock.addEventListener('click',function(){
            rock.style.borderColor = "yellow";
            if (playRound("rock") === "win") {
                playerScore++;
                //display you win, pick again
            };
            else if (playRound("rock") === "lose") {
                computerScore++;
                //display you lose, pick again
            }
            else {
                //display you tied, pick again
            }
            if (playerScore === 5) {
                //display you won 5 times! congrats
                gameOn = false;
            }
            else if (computerScore === 5) {
                //display the computer won 5 times! you lose!
                gameOn = false;
            }
        });
        
        const paper = document.getElementById("paper");
        paper.addEventListener('click',function(){
            paper.style.borderColor = "yellow";
            playRound("paper");
            
        });
        
        const scissors = document.getElementById("scissors");
        scissors.addEventListener('click',function(){
            scissors.style.borderColor = "yellow";
            playRound("scissors");
            
        });
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