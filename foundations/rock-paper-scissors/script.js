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

function playRound(humanChoice, computerChoice) {
  let result = 0;

  humanChoice = humanChoice.toLowerCase();

  const resultWrapper = document.querySelector(".result-wrapper");
  
  const divider = document.createElement("div");
  const humanChoiceMsg = document.createElement("div");
  const computerChoiceMsg = document.createElement("div");
  const resultMsg = document.createElement("div");

  divider.textContent = "-----------------------------------";
  humanChoiceMsg.textContent = `Your choice: ${humanChoice}`;
  computerChoiceMsg.textContent = `Computer choice: ${computerChoice}`;
  
  if (humanChoice === computerChoice) {
    resultMsg.textContent = "Draw!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMsg.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    result = 1;
  } else {
    resultMsg.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    result = -1;
  }
  
  resultWrapper.appendChild(divider);
  resultWrapper.appendChild(humanChoiceMsg);
  resultWrapper.appendChild(computerChoiceMsg);
  resultWrapper.appendChild(resultMsg);
  
  return result;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;  
  
  const choiceBtn = document.querySelectorAll(".choice-btn");

  choiceBtn.forEach(
    btn => btn.addEventListener("click", () => {
      const finalResult = document.querySelector(".final-result");
      const resultWrapper = document.querySelector(".result-wrapper");
      
      if (humanScore === 5 || computerScore === 5) {
          finalResult.textContent = "";
          while (resultWrapper.firstChild) {
            resultWrapper.removeChild(resultWrapper.firstChild);
          }
          humanScore = computerScore = 0;
      }
      
      const humanSelection = btn.textContent;
      const computerSelection = getComputerChoice();
      const result = playRound(humanSelection, computerSelection);
      
      if (result === 1) {
        humanScore++;
      } else if (result === -1) {
        computerScore++;
      }
      
      const scoreMsg = document.querySelector(".score");
      scoreMsg.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

      if (humanScore === 5) {
        finalResult.textContent = "You win the game!";
        finalResult.style.color = "red";
      } else if (computerScore === 5) {
        finalResult.textContent = "You lose the game!";
        finalResult.style.color = "red";
      } 
    })
  )
}

playGame();