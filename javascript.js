const rock = docuement.querySelector('.rock');
const paper = docuement.querySelector('.paper');
const scissors = docuement.querySelector('.scissors');
const scoreTally = document.querySelector('.score');
const computerSelection = '';

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
    if(playerSelection == "rock") {
        if(computerSelection == "scissors") 
            window.score += 1;
        else if(computerSelection == "paper")
            window.score -= 1;
        else
            return;
    }

    if(playerSelection == 'paper') {
        if(computerSelection == "rock") 
        window.score += 1;
        else if(computerSelection == "scissors")
        window.score -= 1;
        else
            return;
    }

    if(playerSelection == 'scissors') {
        if(computerSelection == "paper") 
        window.score += 1;
        else if(computerSelection == "rock")
        window.score -= 1;
        else
            return 0;
    }
}

function game() {
    
}