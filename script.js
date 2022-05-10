const playerImage = document.querySelector("#player-pick");
const aiImage = document.querySelector("#ai-pick");
const picks = Array.from(document.querySelectorAll("input"));


function pick(e){
    playerImage.setAttribute("src", `/img/${e.target.id}.png`);
    aiImage.setAttribute("src", `/img/${computerPlay()}.png`);
    if (playerImage.classList.contains("pick")){
        playerImage.classList.remove("pick");
        aiImage.classList.remove("pick");
    }

}

picks.forEach(picked => picked.addEventListener('click', pick));



let computerPlay = () => {
    let options = ["rock", "paper", "scissors"];
    let pick = Math.floor(Math.random()*3);
    return options[pick];
};

function playRound(playerSelection, computerSelection){

    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return 0;
    } else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "scissors"){
            return -1;
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "rock"){
            return -1;
        }
    } else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "paper"){
            return -1;
        }
    } 
    return 1;
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
}



