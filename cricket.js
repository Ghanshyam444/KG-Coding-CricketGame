let scoreStr = localStorage.getItem("Score");
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        loss: 0,
        tie: 0,
      };

  score.displayScore = function () {
    return ` Score : Won: ${this.win} , Loss: ${this.loss} , Tie: ${this.tie}`;
  };
  showResult();
}

function generateComputerChoice() {
  let computerChoice;
  let randomnumber = Math.random() * 3;
  if (randomnumber > 0 && randomnumber <= 1) {
    computerChoice = "Bat";
  } else if (randomnumber > 1 && randomnumber <= 2) {
    computerChoice = "Ball";
  } else {
    computerChoice = "Stump";
  }
  return computerChoice;
}
function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "User Win";
    } else if (computerMove === "Bat") {
      score.tie++;
      return "Match Draw";
    } else if (computerMove === "Stump") {
      score.loss++;
      return "Computer Win";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return "It's a Tie";
    } else if (computerMove === "Bat") {
      score.loss++;
      return "Computer Won";
    } else if (computerMove === "Stump") {
      score.win++;
      return "User Won";
    }
  } else if (userMove === "Stump") {
    if (computerMove === "Ball") {
      score.loss++;
      return "Computer Won";
    } else if (computerMove === "Bat") {
      score.win++;
      return "User Won";
    } else if (computerMove === "Stump") {
      score.tie++;
      return "It's a Tie";
    }
  }
}
function showResult(userMove, computerMove, resultMsg) {
  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector("#user-move").innerText = userMove
    ? `You have Chosen ${userMove} \n`
    : "";

  document.querySelector("#computer-move").innerText = computerMove
    ? `Computer choice is ${computerMove} \n`
    : "";

  document.querySelector("#result").innerText = resultMsg || "";

  document.querySelector("#score").innerText = `${score["displayScore"]()}`;
}
