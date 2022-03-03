var randomNumber1, randomNumber2, content, checkPlayer1Status = 0,
  checkPlayer2Status = 0,
  checkBothplayed = 0;



if (document.querySelector("h1").innerHTML === "Dice Game" || "Player 2 Wins!") {
  randomNumber1 = document.querySelector(".playerButton1").setAttribute("onclick", "rollDice1()");
}

if (document.querySelector("h1").innerHTML === "Player 1 Wins!" || "Dice Game") {
  randomNumber2 = document.querySelector(".playerButton2").setAttribute("onclick", "rollDice2(),result()");
}


function rollDice1() {
  if (checkPlayer1Status == 0 && checkPlayer2Status == 0) { //if both not played
    checkPlayer1Status = 1; //player1 played
    checkBothplayed++;
    randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    return randomNumber1;
  } else {
    alert("player2 chance"); //if player1 played then give chance to player2
  }
}


function rollDice2() {
  if (checkPlayer1Status == 1) { //player2 play only when player1 got a chance
    checkPlayer2Status = 1; //player2 played
    checkBothplayed++;
    randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    return randomNumber2;
  } else {
    alert("player-1 chance") //if player2 played then give chance to player1
  }
}

function result() {
  if (checkBothplayed == 2) { //check if both players played the game
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } else {
      document.querySelector("h1").textContent = "Draw!";
    }
    checkBothplayed = 0;
    checkPlayer1Status = 0;
    checkPlayer2Status = 0; //reset status
    content = document.querySelector("h1").textContent;


    setTimeout(function() {
      if (content === "Player 1 Wins!" || "Player 2 Wins!" || "Draw!") { //reset status
        document.querySelector("h1").textContent = "Dice Game";
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
      }

    }, 2000);
  }
}
