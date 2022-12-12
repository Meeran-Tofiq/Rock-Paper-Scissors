const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const scoreTally = document.querySelector('.score');

let computerSelection = '';
let score = 0;

rock.addEventListener('click', () =>{
    computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
});

paper.addEventListener('click', () =>{
    computerSelection = getComputerChoice();
    playRound('paper', computerSelection);
});

scissors.addEventListener('click', () =>{
    computerSelection = getComputerChoice();
    playRound('scissors', computerSelection);
}); 

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    console.log(playerSelection + "    vs    " + computerSelection);

    if(playerSelection == "rock") {
        if(computerSelection == "scissors") 
            score += 1;
        else if(computerSelection == "paper")
            score -= 1;
    }

    if(playerSelection == 'paper') {
        if(computerSelection == "rock") 
        score += 1;
        else if(computerSelection == "scissors")
        score -= 1;
    }

    if(playerSelection == 'scissors') {
        if(computerSelection == "paper") 
        score += 1;
        else if(computerSelection == "rock")
        score -= 1;
    }
    scoreTally.textContent = score;
}

function game() {
    
}