'use strict';
/*


*/

//React to something happens on page (event) - event Listener eg: mouce click, hover,key press

//to listen to event first need to add event listener to element
let secretNo = Math.trunc(Math.random() * 20) + 1;
let score = 20,
  highestScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const checkInput = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess || guess > 20) {
    displayMessage('🚫 Not a valid number');
  } else if (guess === secretNo) {
    displayMessage('🎉 Correct Guess');
    document.querySelector('.number').textContent = secretNo;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }
    document.querySelector('.check').disabled = true;
    if (document.querySelector('.check').disabled == true) {
      displayMessage('Please press again to play');
    }
  } else {
    if (score > 1) {
      let mesg = guess > secretNo ? '😬 Too high!' : '😬 Too low!';
      displayMessage(mesg);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('☹️ You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    secretNo = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.check').disabled = false;
  });
};
document.querySelector('.check').addEventListener('click', checkInput);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    checkInput();
  }
});
