function computerPlay(){
    let compChoice = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    // console.log(compChoice[num]);
    return compChoice[num];
}

function playerSelection(){
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    let choice = playerChoice.trim().toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Rock wins!");
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("Computer wins!");
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Computer wins!");
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("Paper wins!");
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Computer wins!");
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Scissors wins!")
    }else {
        console.log("It's a tie!");
    }
}

playerSelection();
computerPlay();