const getComputerChoice = () => {
    const rpsChoices = [
        'rock', 'paper', 'scissors']    
    const randomChoice = Math.floor(Math.random() * rpsChoices.length);
    return rpsChoices[randomChoice]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == 0) {
        console.log("It's a tie! You both chose rock!");
    } else if (playerSelection == "paper" && computerSelection == 0) {
        playerScore++
        console.log("You win! Paper beats rock!");
    } else if (playerSelection == "scissors" && computerSelection == 0) {
        compScore++
        console.log("You Lose! Rock beats scissors!");
    } else if (playerSelection == "rock" && computerSelection == 1) {
        compScore++
        console.log("You lose! Paper beats rock!");
    } else if (playerSelection == "paper" && computerSelection == 1) {
        console.log("You both chose paper! It's a tie!");
    } else if (playerSelection == "scissors" && computerSelection == 1) {
        playerScore++
        console.log("You win! Scissors beats paper!");
    } else if (playerSelection == "rock" && computerSelection == 2) {
        playerScore++
        console.log("You win! Rock beats scissors!");
    } else if (playerSelection == "paper" && computerSelection == 2) {
        compScore++
        console.log("You lose! Scissors beats paper! ");
    } else if (playerSelection == "scissors" && computerSelection == 2) {
        console.log("You both chose scissors! It's a tie!");
    }
}

const game = () => {
for (let i = 0; i < 5; i++) {
const playerSelection = prompt('Choose your move!', 'Rock, Paper, Scissors'.toLowerCase())
const computerSelection = getComputerChoice();
console.log('1 ', playRound(playerSelection, computerSelection));
}
if (playerScore > compScore) {
    console.log("You beat the computer! Good Job!")
} else if (playerScore < compScore) {
    console.log("You lose! Try again!")
} else {
    console.log("...Wow... You tied!")
}
}