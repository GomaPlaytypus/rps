const rpsChoices = [
    'rock',
    'paper',
    'scissors'
];

function getComputerChoice(randomChoice, rpsChoices) {
    var randomChoice = Math.floor(Math.random(rpsChoices) * 2);

switch (randomChoice) {
        case 0:
        console.log("rock");
        break;
        case 1:
        console.log("paper");
        break;
        case 2:
        console.log("scissors");
        break;


    }
};
console.log(getComputerChoice());