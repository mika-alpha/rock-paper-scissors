let computerPlay = () => {
    let options = ["rock", "paper", "scissors"];
    let pick = Math.floor(Math.random()*3);
    return options[pick];
};

function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a draw!";
    } else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "scissors"){
            return "You lose! Scissors beats Paper";
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "rock"){
            return "You lose! Rock beats Scissors";
        }
    } else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "paper"){
            return "You lose! Paper beats Rock";
        }
    } 
    return `You won! ${playerSelection} beats ${computerSelection}`;
}




