let homeScore = 0;
let awayScore = 0;

const homeScoreEl = document.getElementById("home-score");
const awayScoreEl = document.getElementById("away-score");

function resetScore() {
  homeScore = 0;
  awayScore = 0;
  homeScoreEl.innerHTML = homeScore;
  awayScoreEl.innerHTML = awayScore;
}

function homeAddOne() {
  homeScore += 1;
  homeScoreEl.innerHTML = homeScore;
}

function homeAddTwo() {
  homeScore += 2;
  homeScoreEl.innerHTML = homeScore;
}

function homeAddThree() {
  homeScore += 3;
  homeScoreEl.innerHTML = homeScore;
}

function awayAddOne() {
  awayScore += 1;
  awayScoreEl.innerHTML = awayScore;
}

function awayAddTwo() {
  awayScore += 2;
  awayScoreEl.innerHTML = awayScore;
}

function awayAddThree() {
  awayScore += 3;
  awayScoreEl.innerHTML = awayScore;
}
