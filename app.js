const rpsChoices = [
    'rock',
    'paper',
    'scissors'
];
const playerSelection = "".toLowerCase();
const computerSelection = getComputerChoice();

function getComputerChoice(randomChoice, rpsChoices) {
    var randomChoice = Math.floor(Math.random() * rpsChoices.length);

};

switch (playerSelection) {
        case "rock":
        console.log("You chose Rock");
        break;
        case "paper":
        console.log("You chose Paper");
        case "scissors":
        console.log("You chose Scissors");
        break;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == 0) {
        console.log("It's a tie!");
    } else if (playerSelection == "paper" && computerSelection == 0) {
        playerScore++
        console.log("Paper beats rock! You win!");
    } else if (playerSelection == "scissors" && computerSelection == 0) {
        compScore++
        console.log("Rock beats scissors! You Lose!");
    } else if (playerSelection == "rock" && computerSelection == 1) {
        compScore++
        console.log("Paper beats rock! You lose!");
    } else if (playerSelection == "paper" && computerSelection == 1) {
        console.log("It's a tie!");
    } else if (playerSelection == "scissors" && computerSelection == 1) {
        playerScore++
        console.log("Scissors beats paper! You win!");
    } else if (playerSelection == "rock" && computerSelection == 2) {
        playerScore++
        console.log("Rock beats scissors! You win!");
    } else if (playerSelection == "paper" && computerSelection == 2) {
        compScore++
        console.log("Scissors beats paper! You lose!");
    } else if (playerSelection == "scissors" && computerSelection == 2) {
        console.log("It's a tie!");
    }
};

const game = () => {

}