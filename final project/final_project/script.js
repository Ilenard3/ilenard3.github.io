
// NEON EMPIRE CASINO
// Shared balance and player statistics

let balance = 5000;
let gamesPlayed = 0;
let wins = 0;
let playerLevel = 1;

// Load saved casino progress
function loadProgress() {

    if (localStorage.getItem("casinoBalance") !== null) {
        balance = Number(localStorage.getItem("casinoBalance"));
    }

    if (localStorage.getItem("casinoGames") !== null) {
        gamesPlayed = Number(localStorage.getItem("casinoGames"));
    }

    if (localStorage.getItem("casinoWins") !== null) {
        wins = Number(localStorage.getItem("casinoWins"));
    }

    playerLevel = Math.floor(gamesPlayed / 10) + 1;

    updateScreen();
}

// Save casino progress
function saveProgress() {

    localStorage.setItem("casinoBalance", balance);
    localStorage.setItem("casinoGames", gamesPlayed);
    localStorage.setItem("casinoWins", wins);

    updateScreen();
}

// Update all casino displays
function updateScreen() {

    let headerBalance = document.getElementById("header-balance");
    let balanceDisplay = document.getElementById("balance");
    let statBalance = document.getElementById("stat-balance");

    let gamesDisplay = document.getElementById("games-played");
    let winsDisplay = document.getElementById("wins");

    let levelDisplay = document.getElementById("player-level");
    let statLevel = document.getElementById("stat-level");

    if (headerBalance !== null) {
        headerBalance.textContent = balance.toLocaleString() + " CR";
    }

    if (balanceDisplay !== null) {
        balanceDisplay.textContent = balance.toLocaleString();
    }

    if (statBalance !== null) {
        statBalance.textContent = balance.toLocaleString();
    }

    if (gamesDisplay !== null) {
        gamesDisplay.textContent = gamesPlayed;
    }

    if (winsDisplay !== null) {
        winsDisplay.textContent = wins;
    }

    if (levelDisplay !== null) {
        levelDisplay.textContent = playerLevel;
    }

    if (statLevel !== null) {
        statLevel.textContent = playerLevel;
    }
}

// Check if a bet is valid
function getBet() {

    let betInput = document.getElementById("bet");

    if (betInput === null) {
        return 0;
    }

    let bet = Number(betInput.value);

    if (!Number.isSafeInteger(bet) || bet <= 0) {
        alert("Please enter a valid whole-number bet!");
        return 0;
    }

    if (bet > balance) {
        alert("You do not have enough credits!");
        return 0;
    }

    return bet;
}

// Finish a casino game
function finishGame(bet, payout) {

    balance = balance - bet + payout;

    gamesPlayed = gamesPlayed + 1;

    if (payout > bet) {
        wins = wins + 1;
    }

    playerLevel = Math.floor(gamesPlayed / 10) + 1;

    saveProgress();
}

// Reset casino progress
function resetProgress() {

    let answer = confirm(
        "Are you sure you want to reset your casino progress?"
    );

    if (answer === true) {

        balance = 5000;
        gamesPlayed = 0;
        wins = 0;
        playerLevel = 1;

        saveProgress();

        alert("Your casino progress has been reset!");
    }
}

// Load progress when the page opens
loadProgress();
