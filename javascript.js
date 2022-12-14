const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerTally = document.querySelector('.player-score');
const computerTally = document.querySelector('.computer-score');
const gameOverText = document.querySelector(".game-over");
const winner = document.querySelector("h1#winner");

playerTally.textContent = 0;
computerTally.textContent = 0;

let computerSelection = '';
let gameOver = false;
let tally = [0, 0];

rock.addEventListener('click', () => {game("rock")});

paper.addEventListener('click', () => {game("paper")});

scissors.addEventListener('click', () => {game("scissors")}); 

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

    if(computerSelection === playerSelection || tally[0] === 5 || tally[1] === 5)
        return tally;

    if(playerSelection == "rock") {
        if(computerSelection == "scissors") 
            tally[0] += 1;
        else if(computerSelection == "paper")
            tally[1] += 1;
    }

    if(playerSelection == 'paper') {
        if(computerSelection == "rock") 
            tally[0] += 1;
        else if(computerSelection == "scissors")
            tally[1] += 1;
    }

    if(playerSelection == 'scissors') {
        if(computerSelection == "paper") 
            tally[0] += 1;
        else if(computerSelection == "rock")
            tally[1] += 1;
    }

    return tally;
}

function game(playerSelection) {
    if(gameOver) {
        gameOverText.textContent = "The game is done.";
        return;
    }

    let tally = [];

    computerSelection = getComputerChoice();
        
    tally = playRound(playerSelection, computerSelection);

    playerTally.textContent = +tally[0];
    computerTally.textContent = +tally[1];

    if(tally[0] == 5) {
        winner.textContent += "HUMAN PLAYER!";
        gameOver = true;
    } else if(tally[1] == 5) {
        winner.textContent += "ROBOT PLAYER!";
        gameOver = true;
    }
}