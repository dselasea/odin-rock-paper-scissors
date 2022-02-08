function computerPlay(){
    let compChoice = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    // console.log(compChoice[num]);
    return compChoice[num];
}

function playRound(playerSelection, computerSelection){

}

function playerSelection(){
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    let choice = playerChoice.trim().toLowerCase();
    console.log(choice);
}

playerSelection();
computerPlay();