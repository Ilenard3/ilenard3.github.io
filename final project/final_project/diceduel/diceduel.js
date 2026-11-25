// ==========================================
// NEON EMPIRE CASINO
// DICE DUEL
//
// Shared wallet and statistics are provided
// by ../script.js, loaded before this file.
// ==========================================


// ==========================================
// QUICK BET BUTTONS
// ==========================================

function setDiceBet(amount) {

    document.getElementById("dice-bet").value = amount;

}


// ==========================================
// MAIN DICE DUEL FUNCTION
// ==========================================

function playDiceDuel() {

    let betInput = document.getElementById("dice-bet");

    let resultTitle = document.getElementById(
        "dice-result-title"
    );

    let resultDetail = document.getElementById(
        "dice-result-detail"
    );

    let bet = Number(betInput.value);


    // ======================================
    // VALIDATE THE WAGER
    // ======================================

    if (!Number.isSafeInteger(bet) || bet <= 0) {

        resultTitle.textContent = "CHECK YOUR WAGER";

        resultDetail.textContent =
            "Please enter a positive whole-number wager.";

        betInput.focus();

        return;

    }

    if (bet > balance) {

        resultTitle.textContent = "NOT ENOUGH CREDITS";

        resultDetail.textContent =
            "Your wager cannot exceed your available balance.";

        betInput.focus();

        return;

    }

    // Prevent amounts beyond JavaScript's
    // safe whole-number calculation range.
    if (
        !Number.isSafeInteger(bet * 2) ||
        !Number.isSafeInteger(balance + bet)
    ) {

        resultTitle.textContent = "WAGER TOO LARGE";

        resultDetail.textContent =
            "Please enter a smaller wager.";

        betInput.focus();

        return;

    }


    // ======================================
    // GENERATE BOTH DICE ROLLS
    // ======================================

    // Each roll independently produces 1–6.
    let playerRoll = Math.floor(Math.random() * 6) + 1;

    let houseRoll = Math.floor(Math.random() * 6) + 1;

    let diceFaces = [
        "⚀",
        "⚁",
        "⚂",
        "⚃",
        "⚄",
        "⚅"
    ];


    // ======================================
    // DISPLAY BOTH DICE
    // ======================================

    let playerFace = document.getElementById(
        "dice-player-face"
    );

    let houseFace = document.getElementById(
        "dice-house-face"
    );

    playerFace.textContent = diceFaces[playerRoll - 1];

    houseFace.textContent = diceFaces[houseRoll - 1];

    playerFace.setAttribute(
        "aria-label",
        "Your die: " + playerRoll
    );

    houseFace.setAttribute(
        "aria-label",
        "House die: " + houseRoll
    );

    document.getElementById(
        "dice-player-number"
    ).textContent = playerRoll;

    document.getElementById(
        "dice-house-number"
    ).textContent = houseRoll;


    // ======================================
    // CHECK THE RESULT
    // ======================================

    let payout = 0;

    let message = "";

    if (playerRoll > houseRoll) {

        // Win: return twice the original wager.
        payout = bet * 2;

        message = "🏆 YOU WIN THE DUEL!";

    }
    else if (playerRoll === houseRoll) {

        // Tie: return the original wager.
        payout = bet;

        message = "🤝 TIE! WAGER RETURNED";

    }
    else {

        // Loss: no payout.
        payout = 0;

        message = "THE HOUSE WINS THIS ROUND";

    }


    // ======================================
    // UPDATE THE SHARED CASINO WALLET
    // ======================================

    // This existing function:
    // - subtracts the wager
    // - adds the total payout
    // - increments Games Played
    // - increments Wins for a winning round
    // - updates Player Level
    // - saves progress and refreshes displays
    finishGame(bet, payout);


    // ======================================
    // DISPLAY PAYOUT AND NET CHANGE
    // ======================================

    let profit = payout - bet;

    let profitText = profit.toLocaleString();

    if (profit > 0) {

        profitText = "+" + profitText;

    }

    resultTitle.textContent = message;

    resultDetail.textContent =
        "You rolled " + playerRoll +
        ". House rolled " + houseRoll +
        ". Wager: " + bet.toLocaleString() +
        " CR | Total payout: " + payout.toLocaleString() +
        " CR | Net: " + profitText + " CR.";

}