// ==========================================
// NEON EMPIRE CASINO
// FIND THE TENNIS BALL
//
// Uses the shared wallet and finishGame()
// function from ../script.js.
// ==========================================


// Tracks whether the current round is complete.
let tennisRoundFinished = false;


// ==========================================
// QUICK BET BUTTONS
// ==========================================

function setTennisBet(amount) {

    // Keep the completed round's wager unchanged
    // until the player selects Play Again.
    if (tennisRoundFinished === true) {
        return;
    }

    document.getElementById("tennis-bet").value = amount;

}


// ==========================================
// PICK A CUP AND COMPLETE ONE ROUND
// ==========================================

function pickTennisCup(choice) {

    // Prevent additional selections after the reveal.
    if (tennisRoundFinished === true) {
        return;
    }

    // Only allow the three valid cup positions.
    if (
        !Number.isInteger(choice) ||
        choice < 0 ||
        choice > 2
    ) {
        return;
    }


    // ======================================
    // FIND THE GAME ELEMENTS
    // ======================================

    let betInput = document.getElementById("tennis-bet");

    let resultTitle = document.getElementById(
        "tennis-result-title"
    );

    let resultDetail = document.getElementById(
        "tennis-result-detail"
    );

    let stageMessage = document.getElementById(
        "tennis-stage-message"
    );

    let againButton = document.getElementById(
        "tennis-again-button"
    );

    let bet = Number(betInput.value);


    // ======================================
    // VALIDATE THE WAGER
    // ======================================

    if (
        !Number.isSafeInteger(bet) ||
        bet < 5 ||
        bet % 5 !== 0
    ) {

        resultTitle.textContent = "CHECK YOUR WAGER";

        resultDetail.textContent =
            "Enter at least 5 credits in multiples of 5.";

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

    // 2.8x is calculated as 14/5.
    // Dividing a multiple of 5 first keeps payouts whole.
    let winningPayout = (bet / 5) * 14;

    let possibleBalance = balance - bet + winningPayout;

    if (
        !Number.isSafeInteger(winningPayout) ||
        !Number.isSafeInteger(possibleBalance)
    ) {

        resultTitle.textContent = "WAGER TOO LARGE";

        resultDetail.textContent =
            "Please enter a smaller wager.";

        betInput.focus();

        return;

    }


    // ======================================
    // RANDOMLY PLACE THE TENNIS BALL
    // ======================================

    // 0 = Cup 1
    // 1 = Cup 2
    // 2 = Cup 3
    let ballPosition = Math.floor(Math.random() * 3);


    // ======================================
    // DETERMINE THE PAYOUT
    // ======================================

    let payout = 0;

    let message = "";

    if (choice === ballPosition) {

        payout = winningPayout;

        message = "🎾 YOU FOUND THE TENNIS BALL!";

    }
    else {

        payout = 0;

        message = "EMPTY CUP! BETTER LUCK NEXT TIME!";

    }


    // Lock this round before updating the wallet.
    tennisRoundFinished = true;


    // ======================================
    // UPDATE THE SHARED CASINO WALLET
    // ======================================

    // Subtracts the wager, adds the payout,
    // updates statistics, and saves progress.
    finishGame(bet, payout);


    // ======================================
    // REVEAL ALL THREE CUPS
    // ======================================

    for (let i = 0; i < 3; i++) {

        let cup = document.getElementById(
            "tennis-cup-" + (i + 1)
        );

        let reveal = document.getElementById(
            "tennis-reveal-" + (i + 1)
        );

        let containsBall = i === ballPosition;

        let selectedCup = i === choice;

        cup.classList.add("revealed");

        cup.classList.toggle("selected", selectedCup);

        cup.classList.toggle("has-ball", containsBall);

        if (containsBall === true) {

            reveal.textContent = "🎾";

        }
        else {

            reveal.textContent = "—";

        }

        let cupDescription =
            "Cup " + (i + 1) + ": ";

        if (containsBall === true) {

            cupDescription += "tennis ball";

        }
        else {

            cupDescription += "empty";

        }

        if (selectedCup === true) {

            cupDescription += ", your choice";

        }

        cup.setAttribute("aria-label", cupDescription);

        // Prevent another wager on the revealed cups.
        cup.disabled = true;

    }


    // ======================================
    // LOCK WAGER CONTROLS
    // ======================================

    betInput.disabled = true;

    let quickBetButtons = document.querySelectorAll(
        ".tennis-quick-bets button"
    );

    for (let i = 0; i < quickBetButtons.length; i++) {

        quickBetButtons[i].disabled = true;

    }


    // ======================================
    // DISPLAY THE RESULT
    // ======================================

    let profit = payout - bet;

    let profitText = profit.toLocaleString();

    if (profit > 0) {

        profitText = "+" + profitText;

    }

    stageMessage.textContent =
        "You chose Cup " + (choice + 1) +
        ". The ball was in Cup " + (ballPosition + 1) + ".";

    resultTitle.textContent = message;

    resultDetail.textContent =
        "Wager: " + bet.toLocaleString() +
        " CR | Total payout: " + payout.toLocaleString() +
        " CR | Net: " + profitText + " CR.";


    // Allow the player to prepare another round.
    againButton.disabled = false;

    againButton.focus();

}


// ==========================================
// PREPARE ANOTHER ROUND
// ==========================================

function resetTennisRound() {

    // Ignore reset requests before a round finishes.
    if (tennisRoundFinished === false) {
        return;
    }

    tennisRoundFinished = false;


    // Cover the cups and clear the previous result.
    for (let i = 0; i < 3; i++) {

        let cup = document.getElementById(
            "tennis-cup-" + (i + 1)
        );

        let reveal = document.getElementById(
            "tennis-reveal-" + (i + 1)
        );

        cup.classList.remove(
            "revealed",
            "selected",
            "has-ball"
        );

        reveal.textContent = "?";

        cup.setAttribute(
            "aria-label",
            "Choose cup " + (i + 1)
        );

        cup.disabled = false;

    }


    // Unlock the wager controls.
    document.getElementById("tennis-bet").disabled = false;

    let quickBetButtons = document.querySelectorAll(
        ".tennis-quick-bets button"
    );

    for (let i = 0; i < quickBetButtons.length; i++) {

        quickBetButtons[i].disabled = false;

    }


    // Disable Play Again until another round finishes.
    document.getElementById(
        "tennis-again-button"
    ).disabled = true;


    // Restore the starting messages.
    document.getElementById(
        "tennis-stage-message"
    ).textContent =
        "Choose one cup to reveal the tennis ball.";

    document.getElementById(
        "tennis-result-title"
    ).textContent =
        "WHERE IS THE TENNIS BALL?";

    document.getElementById(
        "tennis-result-detail"
    ).textContent =
        "Enter your wager, then select one cup.";


    // Preparing a round does not charge credits
    // or increase Games Played.
    document.getElementById("tennis-bet").focus();

}