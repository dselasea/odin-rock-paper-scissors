let player = 0;
let comp = 0;
const computerSelection = function computerPlay(){
    let compChoice = ["rock", "paper", "scissors"];
    let num = Math.floor(Math.random() * 3);
    return compChoice[num];
}

const playerSelection = function playerSelection(){
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    if(playerChoice == null){
        console.log("hey")
    }
    let choice = playerChoice.trim().toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Rock wins!");
        player++;
    }else if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("Computer wins!");
        comp++;
    }else if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Computer wins!");
        comp++;
    }else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("Paper wins!");
        player++;
    }else if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Computer wins!");
        comp++;
    }else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Scissors wins!");
        player++;
    }else if(playerSelection === "" || playerSelection === null){
        console.log("Wrong Input!");
    }else{
        console.log("It's a tie!");
    }
}

function game(){
    let count = 0;
    while(count <= 5){
        playRound(playerSelection(), computerSelection());
        count++;
    }
    if(player > comp){
        console.log("Player wins!")
    }else if(player < comp){
        console.log("Computer wins!");
    }else{
        console.log("Its a tie!")
    }
    console.log(player, comp);
}
// console.log(playerSelection());
// console.log(computerSelection());
game();