const ROCK = "Rock";
const SCISSOR = "Scissor";
const PAPER = "Paper";

function userValue(current) {
  document.getElementById("userResult").innerHTML = 'User: '+current;
  let c = getC();
  if (current === c) {
    alert("Play again");
  } else if (
    (current === ROCK && c === SCISSOR) ||
    (current === PAPER && c === ROCK) ||
    (current === SCISSOR && c === PAPER)
  ) {
    alert("You won the game");
  } else {
    alert("Computer won the game");
  }
}

function getC() {
  let myarray = [ROCK, PAPER, SCISSOR];
  let random = myarray[Math.floor(Math.random() * myarray.length)];
  document.getElementById("computerResult").innerHTML = 'Computer: '+random;
  return random;
}


