function getComputerChoice(computerSelection) {
  computerSelection = Math.floor(Math.random() * 3);
  
  if (computerSelection === 0) {
    return 'Computer plays Rock.';
  } else if (computerSelection === 1) {
    return 'Computer plays Paper.';
  } else {
    return 'Computer plays Scissors.';
  }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());