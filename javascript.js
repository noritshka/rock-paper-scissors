function getComputerChoice(randomNumber) {
  randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function getPlayerChoice(playerChoice) {
  playerChoice = prompt("Please enter rock, paper or scissors.", "").toLowerCase();
  
  while(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
    playerChoice = prompt("Wrong input. Please enter rock, paper or scissors.", "").toLowerCase();
  }

  return playerChoice;
}

function game() {

  let playerCount = 0;
  let computerCount = 0;

  for(let i = 0; i < 5;  i++) {

    function playRound(playerSelection, computerSelection) {

      console.log("Player: " + playerSelection);
      console.log("Computer: " + computerSelection);

      if (playerSelection === computerSelection) {
        //return "It's a draw.";
        playerCount++;
        computerCount++;
        return "It's a draw.\nPlayer Count: " + playerCount + " - Computer Count: " + computerCount;
      } else if (playerSelection === "rock" && computerSelection == "scissors") {
        playerCount++;
        return "You win!\nPlayer Count: " + playerCount + " - Computer Count: " + computerCount;
      } else if (playerSelection === "paper" && computerSelection == "rock") {
        playerCount++;
        return "You win!\nPlayer Count: " + playerCount + " - Computer Count: " + computerCount;
      } else if (playerSelection === "scissors" && computerSelection == "paper") {
        playerCount++;
        return "You win!\nPlayer Count: " + playerCount + " - Computer Count: " + computerCount;
      } else if (playerSelection === "scissors" && computerSelection == "rock") {
        computerCount++;
        return "You lose!\nPlayer Count: " + playerCount + " - Computer Count: " + computerCount;
      } else if (playerSelection === "rock" && computerSelection == "paper") {
        computerCount++;
        return "You lose!\nPlayer Count: " + playerCount + " - Computer Count: " + computerCount;
      } else if (playerSelection === "paper" && computerSelection == "scissors") {
        computerCount++;
        return "You lose!\nPlayer Count: " + playerCount + " - Computer Count: " + computerCount;
      }
    }

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

  }

  if (playerCount > computerCount) {
    return "Player wins the game.";
  } else if (playerCount < computerCount) {
    return "Computer wins the game.";
  } else if (playerCount === computerCount) {
    return "Both players scored equally.";
  } else {
    return "Something went wrong, sorry.";
  }
}

console.log(game());