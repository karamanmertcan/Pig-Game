'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceE = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

score0El.textContent = 0;
score1El.textContent = 0;
const scores = [0, 0];
let currentScore = 0;
let playerActive = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${playerActive}`).textContent = 0;
  currentScore = 0;
  playerActive = playerActive === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const random = Math.trunc(Math.random() * 6) + 1;
    console.log(random);

    diceE.classList.remove('hidden');
    diceE.src = `dice-${random}.png`;

    if (random !== 1) {
      currentScore += random;
      document.getElementById(
        `current--${playerActive}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[playerActive] += currentScore;

    document.getElementById(`score--${playerActive}`).textContent =
      scores[playerActive];

    //2.check if plaer score >= 10
    if (scores[playerActive] >= 20) {
      playing = false;
      diceE.classList.add('hidden');
      document
        .querySelector(`.player--${playerActive}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${playerActive}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
  //1.add currentscoree to active players score

  //siwtttch nextt player
});

btnNew.addEventListener('click', function () {
  diceE.classList.remove('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  playerActive = 0;
  document
    .querySelector(`.player--${playerActive}`)
    .classList.remove('player--winner');
});
