// GRAB THE SCORE ELEMENTS
const homeScoreEl = document.getElementById("home-score");
const awayScoreEl = document.getElementById("away-score");

// SET THE SCORE COUNTER FOR BOTH TEAMS
let homeScore = 0;
let awayScore = 0;

// RESET THE SCORE TO ZERO
function resetScore() {
  homeScore = 0;
  awayScore = 0;
  homeScoreEl.innerHTML = homeScore;
  awayScoreEl.innerHTML = awayScore;
}

// ADD ONE TO THE HOME SCORE
function homeAddOne() {
  homeScore += 1;
  homeScoreEl.innerHTML = homeScore;
}

// ADD TWO TO THE HOME SCORE
function homeAddTwo() {
  homeScore += 2;
  homeScoreEl.innerHTML = homeScore;
}

// ADD THREE TO HOME SCORE
function homeAddThree() {
  homeScore += 3;
  homeScoreEl.innerHTML = homeScore;
}

// ADD ONE TO AWAY SCORE
function awayAddOne() {
  awayScore += 1;
  awayScoreEl.innerHTML = awayScore;
}

// ADD TWO TO AWAY SCORE
function awayAddTwo() {
  awayScore += 2;
  awayScoreEl.innerHTML = awayScore;
}

// ADD THREE TO AWAY SCORE
function awayAddThree() {
  awayScore += 3;
  awayScoreEl.innerHTML = awayScore;
}
