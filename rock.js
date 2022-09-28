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

function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    if (computerSelection=== "Rock" && playerSelection === "paper"){
        return 1
    } else if (computerSelection === "Rock" && playerSelection === "rock"){
        return 2
    } else if (computerSelection === "Rock" && playerSelection === "scissors"){
        return 3
    }
    if (computerSelection=== "Paper" && playerSelection === "scissors"){
        return 1
    } else if (computerSelection === "Paper" && playerSelection === "paper"){
        return 2
    } else if (computerSelection === "Paper" && playerSelection === "rock"){
        return 3
    }
    if (computerSelection=== "Scissors" && playerSelection === "rock"){
        return 1
    } else if (computerSelection === "Scissors" && playerSelection === "scissors"){
        return 2
    } else if (computerSelection === "Scissors" && playerSelection === "paper"){
        return 3
    }
}

let game = 0;
let playerSelection = '';
let playerScore = 0;
let compScore = 0;
const btnRock = document.querySelector('#btnRock');
const btnPap = document.querySelector('#btnPap');
const btnSci = document.querySelector('#btnSci');

btnRock.addEventListener('click', () => {
    playerSelection = "rock";
    return game = playRound(playerSelection);
});

btnPap.addEventListener('click', () => {
    playerSelection = "paper";
    return game = playRound(playerSelection);
    });

btnSci.addEventListener('click', () => {
    playerSelection = "scissors";
    return game = playRound(playerSelection);
});

const results = document.querySelector("#results");
const score = document.createElement('div');
score.classList.add('score');

function match(){
    if (game === 1){
        return playerScore++;
    } else if (game === 3){
        return compScore++;
    }
};

function resulter(){
    if (playerScore < 5 && compScore < 5){
        score.textContent = 'You currently have ' + playerScore + ' points and the computer has ' + compScore + ' points!';
        results.appendChild(score);
    } else {
        score.textContent = 'Game over! Final score was ' + playerScore + ' for you and ' +compScore+ ' for the computer!';
        results.appendChild(score);
    }
};

const btns = document.querySelectorAll('button[id^=btn]');
btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        match();
        resulter();
    })});