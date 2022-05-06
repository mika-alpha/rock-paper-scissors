let computerPlay = () => {
    let options = ["rock", "paper", "scissors"];
    let pick = Math.floor(Math.random()*3);
    return options[pick];
};

function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log("It's a draw!");
        return 0;
    } else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "scissors"){
            console.log("You lose! Scissors beats Paper");
            return -1;
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "rock"){
            console.log("You lose! Rock beats Scissors");
            return -1;
        }
    } else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "paper"){
            console.log("You lose! Paper beats Rock");
            return -1;
        }
    } 
    console.log(`You won! ${playerSelection} beats ${computerSelection}`);
    return 1;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let result = playRound(prompt("Rock, Papper or Scissors: "), computerPlay());
        if (result === 1){
            playerScore++;
        } else if (result === -1){
            computerScore++;
        }
    }
    
    if (playerScore > computerScore){
        return "The player has won!!"   
    } else if (playerScore < computerScore){
        return "The computer has won!!"
    } else {
        return "It's a draw!! no one has won!!"
    }
}

console.log(game());


