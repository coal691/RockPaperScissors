
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

console.log(computerSelection)
