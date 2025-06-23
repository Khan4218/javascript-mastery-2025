let homeScore = 0;
let guestScore = 0;

function updateDisplay() {
  document.getElementById("home-score").textContent = homeScore;
  document.getElementById("guest-score").textContent = guestScore;
}

function addHome(points) {
  homeScore += points;
  updateDisplay();
}

function addGuest(points) {
  guestScore += points;
  updateDisplay();
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  updateDisplay();
}