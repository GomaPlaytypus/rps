const rpsChoices = [
    'rock',
    'paper',
    'scissors'
];
const keptPlayerScore = document.getElementById('kept-player-score');
const keptCompScore = document.getElementById('kept-comp-score');
const roundScore = document.getElementById('round-score');

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == 0) {
        roundScore.textContent = "It's a tie! You both chose rock!";
    } else if (playerSelection == "paper" && computerSelection == 0) {
        playerScore++
        roundScore.textContent = "You win! Paper beats rock!";
        keptPlayerScore.textContent = `${playerScore}`;
    } else if (playerSelection == "scissors" && computerSelection == 0) {
        compScore++
        roundScore.textContent = "You Lose! Rock beats scissors!";
        keptCompScore.textContent = `${compScore}`;
    } else if (playerSelection == "rock" && computerSelection == 1) {
        compScore++
        roundScore.textContent = "You lose! Paper beats rock!";
        keptCompScore.textContent = `${compScore}`;
    } else if (playerSelection == "paper" && computerSelection == 1) {
        roundScore.textContent = "You both chose paper! It's a tie!";
    } else if (playerSelection == "scissors" && computerSelection == 1) {
        playerScore++
        roundScore.textContent = "You win! Scissors beats paper!";
        keptPlayerScore.textContent = `${playerScore}`;
    } else if (playerSelection == "rock" && computerSelection == 2) {
        playerScore++
        roundScore.textContent = "You win! Rock beats scissors!";
        keptPlayerScore.textContent = `${playerScore}`;
    } else if (playerSelection == "paper" && computerSelection == 2) {
        compScore++
        roundScore.textContent = "You lose! Scissors beats paper! ";
        keptCompScore.textContent = `${compScore}`;
    } else if (playerSelection == "scissors" && computerSelection == 2) {
        roundScore.textContent = "You both chose scissors! It's a tie!";
}};

    let playerScore = 0;
    let compScore = 0;

const checkForWinner = (playerScore, compScore) => {
    const endScore = document.getElementById('end-score');
    if(playerScore == 5 && compScore != 5) {
        endScore.textContent = "You beat the computer! Good Job!";
    } else if(compScore == 5 && playerScore != 5) {
        endScore.textContent = "You lose! Try again!";
    } else if(playerScore == 5 && compScore == 5) {
        endScore.textContent = "...Wow... You tied!";
}};

const rpsButtons = document.querySelectorAll('[data-selection]');

rpsButtons.forEach ((rpsButton) => {
rpsButton.addEventListener('click', e => {
    const playerSelection = rpsButton.dataset.selection;
    const computerSelection = Math.floor(Math.random() * rpsChoices.length);
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
})
});

