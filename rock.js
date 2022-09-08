
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




function getPlayerChoice() {
    const pChoice = prompt("Rock, Paper, or Scissors?");
    const playerChoice = pChoice.toLowerCase();
    return playerChoice;
};





function playRound(){
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if (computerSelection=== "Rock" && playerSelection === "paper"){
        return 1
    } else if (computerSelection === "Rock" && playerSelection === "rock"){
        return 0
    } else if (computerSelection === "Rock" && playerSelection === "scissors"){
        return 2
    }
    if (computerSelection=== "Paper" && playerSelection === "scissors"){
        return 1
    } else if (computerSelection === "Paper" && playerSelection === "paper"){
        return 0
    } else if (computerSelection === "Paper" && playerSelection === "rock"){
        return 2
    }
    if (computerSelection=== "Scissors" && playerSelection === "rock"){
        return 1
    } else if (computerSelection === "Scissors" && playerSelection === "scissors"){
        return 0
    } else if (computerSelection === "Scissors" && playerSelection === "paper"){
        return 2
    }
}





function game(){
    let playerScore = 0;
    let compScore = 0;
    for (let i=1; i<6; i++){
        if (i<6) {
            let rOutcome = playRound()
                if (rOutcome === 1) {
                    ++playerScore
                } else if (rOutcome === 2){
                    ++compScore
                } console.log("Round " + i + " is over! You have " + playerScore + " and the computer has " + compScore + "!");
        } 
}
}
