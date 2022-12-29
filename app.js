const rpsChoices = [
    'rock',
    'paper',
    'scissors'
];

function getComputerChoice(randomChoice, rpsChoices) {
    var randomChoice = Math.floor(Math.random(rpsChoices) * 2);
};

function playRound(playerSelection, ComputerSelection) {

}

const playerSelection = "";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));