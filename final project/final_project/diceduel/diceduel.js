// ==========================================
// NEON EMPIRE CASINO
// DICE DUEL
// Uses the shared wallet in ../script.js
// ==========================================


// Switch between Play and How to Play.
function showDiceTab(tabName) {

    let showPlay = tabName === "play";

    let playTab = document.getElementById("dice-play-tab");

    let rulesTab = document.getElementById("dice-rules-tab");

    let playPanel = document.getElementById("dice-play-panel");

    let rulesPanel = document.getElementById("dice-rules-panel");


    // Show the selected panel and hide the other one.
    playPanel.hidden = !showPlay;

    rulesPanel.hidden = showPlay;


    // Update which tab appears selected.
    playTab.setAttribute(
        "aria-selected",
        String(showPlay)
    );

    rulesTab.setAttribute(
        "aria-selected",
        String(!showPlay)
    );


    // Support keyboard navigation.
    playTab.tabIndex = showPlay ? 0 : -1;

    rulesTab.tabIndex = showPlay ? -1 : 0;
}


// Allow arrow keys, Home, and End to switch tabs.
let diceTabs = document.querySelectorAll(".dice-tabs button");

for (let i = 0; i < diceTabs.length; i++) {

    diceTabs[i].addEventListener("keydown", function(event) {

        let nextTab;

        if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight"
        ) {

            nextTab = i === 0 ? 1 : 0;
        }
        else if (event.key === "Home") {

            nextTab = 0;
        }
        else if (event.key === "End") {

            nextTab = 1;
        }
        else {

            return;
        }

        event.preventDefault();

        showDiceTab(nextTab === 0 ? "play" : "rules");

        diceTabs[nextTab].focus();
    });
}


// Change the wager using a quick-bet button.
function setDiceBet(amount) {

    document.getElementById("dice-bet").value = amount;
}


// Play one complete Dice Duel round.
function playDiceDuel() {

    let betInput = document.getElementById("dice-bet");

    let resultTitle = document.getElementById(
        "dice-result-title"
    );

    let resultDetail = document.getElementById(
        "dice-result-detail"
    );

    let bet = Number(betInput.value);


    // ==========================================
    // VALIDATE THE WAGER
    // ==========================================

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

    // Keep payouts and the balance within safe numeric limits.
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


    // ==========================================
    // ROLL THE DICE
    // ==========================================

    // Each die independently generates a number from 1 to 6.
    let playerRoll = Math.floor(Math.random() * 6) + 1;

    let houseRoll = Math.floor(Math.random() * 6) + 1;

    let diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];


    // ==========================================
    // DISPLAY BOTH ROLLS
    // ==========================================

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


    // ==========================================
    // DETERMINE THE WINNER AND PAYOUT
    // ==========================================

    let payout = 0;

    let message = "";

    if (playerRoll > houseRoll) {

        // Winning payout includes the original wager.
        payout = bet * 2;

        message = "🏆 YOU WIN THE DUEL!";
    }
    else if (playerRoll === houseRoll) {

        // A tie returns the original wager.
        payout = bet;

        message = "🤝 TIE! WAGER RETURNED";
    }
    else {

        // A loss returns no credits.
        payout = 0;

        message = "THE HOUSE WINS THIS ROUND";
    }


    // ==========================================
    // UPDATE THE SHARED CASINO WALLET
    // ==========================================

    // Your existing function subtracts the wager,
    // adds the payout, updates statistics, and saves progress.
    finishGame(bet, payout);


    // ==========================================
    // DISPLAY THE RESULT
    // ==========================================

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