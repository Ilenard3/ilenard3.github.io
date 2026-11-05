// Shared virtual-credit account for Neon Empire.
let balance = 5000;
let gamesPlayed = 0;
let wins = 0;
let playerLevel = 1;

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

function updateScreen() {
    let values = {
        "header-balance": balance.toLocaleString() + " CR",
        "side-balance": balance.toLocaleString(),
        "side-level": playerLevel,
        "balance": balance.toLocaleString(),
        "games-played": gamesPlayed,
        "wins": wins,
        "player-level": playerLevel
    };
    for (let id in values) {
        let element = document.getElementById(id);
        if (element !== null) element.textContent = values[id];
    }
}

function saveProgress() {
    localStorage.setItem("casinoBalance", balance);
    localStorage.setItem("casinoGames", gamesPlayed);
    localStorage.setItem("casinoWins", wins);
    updateScreen();
}

// Game pages can call this after a completed round.
function finishGame(bet, payout) {
    if (!Number.isSafeInteger(bet) || bet <= 0 || bet > balance ||
        !Number.isSafeInteger(payout) || payout < 0) return false;
    balance = balance - bet + payout;
    gamesPlayed++;
    if (payout > bet) wins++;
    playerLevel = Math.floor(gamesPlayed / 10) + 1;
    saveProgress();
    return true;
}

function getBet() {
    let input = document.getElementById("bet");
    if (input === null) return 0;
    let bet = Number(input.value);
    if (!Number.isSafeInteger(bet) || bet <= 0 || bet > balance) {
        alert("Enter a whole-number bet between 1 and your available credits.");
        return 0;
    }
    return bet;
}

function resetProgress() {
    if (!confirm("Reset your virtual credits and all casino statistics?")) return;
    balance = 5000;
    gamesPlayed = 0;
    wins = 0;
    playerLevel = 1;
    saveProgress();
}

document.getElementById("reset-button")?.addEventListener("click", resetProgress);
loadProgress();
