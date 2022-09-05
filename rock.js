
function  getComputerChoice() {
    let cChoice = Math.floor(Math.random()*3+1); 
    switch (cChoice){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}
const computerSelection = getComputerChoice();

console.log(computerSelection);

function getPlayerChoice() {
    const pChoice = prompt("Rock, Paper, or Scissors?");
    const playerChoice = pChoice.toLowerCase();
    return playerChoice;
};

const playerSelection = getPlayerChoice();

console.log(playerSelection);

function round(computerSelection, playerSelection){
    if (computerSelection=== "Rock" && playerSelection === "paper"){
        return "You win! Paper beats Rock."
    } else if (computerSelection === "Rock" && playerSelection === "rock"){
        return "Wow! It's a tie!"
    } else if (computerSelection === "Rock" && playerSelection === "scissors"){
        return "Aw. You lost :("
    }
    if (computerSelection=== "Paper" && playerSelection === "scissors"){
        return "You win! Scissors beats Paper."
    } else if (computerSelection === "Paper" && playerSelection === "paper"){
        return "Wow! It's a tie!"
    } else if (computerSelection === "Paper" && playerSelection === "rock"){
        return "Aw. You lost :("
    }
    if (computerSelection=== "Scissors" && playerSelection === "rock"){
        return "You win! Rock beats Scissors."
    } else if (computerSelection === "Scissors" && playerSelection === "scissors"){
        return "Wow! It's a tie!"
    } else if (computerSelection === "Scissors" && playerSelection === "paper"){
        return "Aw. You lost :("
    }
}
const rOutcome = round(computerSelection, playerSelection);
console.log(rOutcome);