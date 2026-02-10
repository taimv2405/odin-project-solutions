function getComputerChoice() {
  const rand = Math.random();
  if (rand >= 2/3) {
    return "rock";
  } else if (rand >= 1/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper, or scissors): ");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") || 
      (humanChoice === "paper" && computerChoice === "rock") || 
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  for(let i = 1; i <= 5; i++) {
    console.log(`--- Game ${i} ---`);
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("--------------");
  if (humanScore > computerScore) {
    console.log(`You win the game! Final Score: You ${humanScore} - ${computerScore} Computer`);
  } else if (humanScore < computerScore) {
    console.log(`You lose the game! Final Score: You ${humanScore} - ${computerScore} Computer`);
  } else {
    console.log(`Draw! Final Score: You ${humanScore} - ${computerScore} Computer`);
  }
}

playGame();