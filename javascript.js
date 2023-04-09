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


function playRound(playerSelection, computerSelection) {

  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);

  if (playerSelection === computerSelection) {
    return "It's a draw.";
  } else if (playerSelection === "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection == "rock") {
  return "You win! Paper beats rock.";
  } else if (playerSelection === "scissors" && computerSelection == "paper") {
  return "You win! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats scissors.";
  } else if (playerSelection === "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats paper.";
  } else {
    return "Nope";
  }
}

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));