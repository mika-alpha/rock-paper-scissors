const playerImage = document.querySelector("#player-pick");
const aiImage = document.querySelector("#ai-pick");
const picks = Array.from(document.querySelectorAll("input"));
const newGameButton = document.getElementById("new-game");

let playerScore = 0;
let aiScore = 0;
let roundCount = 0;


function pick(e){

    if (playerScore === 5 || aiScore === 5){
        newGameButton.click();
    }
    
    playerImage.setAttribute("src", `/img/${e.target.id}.png`);
    aiImage.setAttribute("src", `/img/${computerPlay()}.png`);
    if (playerImage.classList.contains("pick")){
        playerImage.classList.remove("pick");
        aiImage.classList.remove("pick");
    }
    let computerPick = aiImage.getAttribute("src").substring(
        aiImage.getAttribute("src").lastIndexOf('/')+1, 
        aiImage.getAttribute("src").lastIndexOf('.')
    );
    playRound(e.target.id, computerPick);
    updateScores();
    checkGame();
}

picks.forEach(picked => picked.addEventListener('click', pick));

function updateScores(){
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("ai-score").textContent = aiScore;
    document.getElementById("round").textContent = roundCount;
}

let computerPlay = () => {
    let options = ["rock", "paper", "scissors"];
    let pick = Math.floor(Math.random()*3);
    return options[pick];
};

function playRound(playerSelection, computerSelection){
    roundCount++;
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return;
    } else if (playerSelection.toLowerCase() === "paper"){
        if (computerSelection === "scissors"){
            return aiScore++;
        }
    } else if (playerSelection.toLowerCase() === "scissors"){
        if (computerSelection === "rock"){
            return aiScore++;;
        }
    } else if (playerSelection.toLowerCase() === "rock"){
        if (computerSelection === "paper"){
            return aiScore++;
        }
    } 
    return playerScore++;
}

function checkGame(){
    if (playerScore === 5){
        alert("You won!");
    } else if (aiScore === 5){
        alert("You lose!");
    }
}

function newGame(){
    playerScore = 0;
    aiScore = 0;
    roundCount = 0; 
    playerImage.classList.add("pick");
    aiImage.classList.add("pick");
    updateScores();
}

newGameButton.addEventListener('click', newGame);