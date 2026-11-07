
// ==========================================
// NEON EMPIRE CASINO
// COIN FLIP 2.0
// ==========================================


// Tracks whether a coin flip is happening
let isFlipping = false;


// ==========================================
// QUICK BET BUTTONS
// ==========================================

function setBet(amount) {

    // Do not change the bet during a flip
    if (isFlipping === true) {
        return;
    }

    document.getElementById("bet").value = amount;

}


// ==========================================
// MAIN COIN FLIP FUNCTION
// ==========================================

function flipCoin(choice) {

    // Prevent multiple flips at once
    if (isFlipping === true) {
        return;
    }

    // Check the player's available credits
    let bet = getBet();

    if (bet === 0) {
        return;
    }

    // Require bets in increments of 10
    if (bet % 10 !== 0) {

        alert("Please enter a bet in increments of 10 credits.");

        return;
    }

    // Make sure the selected side is valid
    if (choice !== "heads" && choice !== "tails") {
        return;
    }


    // =====================================
    // GENERATE THE RANDOM COIN RESULT
    // =====================================

    let randomNumber = Math.floor(Math.random() * 2);

    let result;

    if (randomNumber === 0) {
        result = "heads";
    }
    else {
        result = "tails";
    }


    // =====================================
    // FIND THE HTML ELEMENTS
    // =====================================

    let coin = document.getElementById("coin-disc");

    let coinFace = document.getElementById("coin-face-symbol");

    let status = document.getElementById("coin-status");

    let substatus = document.getElementById("coin-substatus");

    let resultDisplay = document.getElementById("coin-result");

    let winningsDisplay = document.getElementById("coin-winnings");

    let headsButton = document.getElementById("heads-button");

    let tailsButton = document.getElementById("tails-button");

    let betInput = document.getElementById("bet");

    let quickBetButtons = document.querySelectorAll(
        ".quick-bets button"
    );


    // =====================================
    // START THE COIN FLIP
    // =====================================

    isFlipping = true;

    headsButton.disabled = true;
    tailsButton.disabled = true;
    betInput.disabled = true;

    // Disable all quick bet buttons
    for (let i = 0; i < quickBetButtons.length; i++) {

        quickBetButtons[i].disabled = true;

    }

    // Update the display
    status.textContent = "THE COIN IS FLIPPING...";

    substatus.textContent = "Good luck!";

    resultDisplay.textContent = "GOOD LUCK!";

    winningsDisplay.textContent =
        "Your wager: " + bet.toLocaleString() + " credits.";

    coinFace.textContent = "?";


    // Restart the animation
    coin.classList.remove("flipping");

    void coin.offsetWidth;

    coin.classList.add("flipping");


    // =====================================
    // REVEAL THE RESULT
    // =====================================

    setTimeout(function() {

        let payout = 0;

        let message = "";


        // Display the coin result
        if (result === "heads") {

            coinFace.textContent = "👑";

        }
        else {

            coinFace.textContent = "🪙";

        }


        // Check the player's prediction
        if (choice === result) {

            // Return 1.9 times the original bet
            // This includes the original wager
            payout = bet * 1.9;

            message = "🎉 YOU WIN!";

        }
        else {

            // No payout on an incorrect prediction
            payout = 0;

            message = "BETTER LUCK NEXT TIME!";

        }


        // =====================================
        // UPDATE THE SHARED CASINO WALLET
        // =====================================

        finishGame(bet, payout);


        // =====================================
        // DISPLAY THE RESULT
        // =====================================

        status.textContent =
            "THE COIN LANDED ON " + result.toUpperCase() + "!";

        substatus.textContent =
            "You selected " + choice.toUpperCase() + ".";

        resultDisplay.textContent = message;


        // Show the correct payout and profit
        if (payout > 0) {

            let profit = payout - bet;

            winningsDisplay.textContent =
                "Total payout: " +
                payout.toLocaleString() +
                " credits | Profit: +" +
                profit.toLocaleString() +
                " credits.";

        }
        else {

            winningsDisplay.textContent =
                "You lost " + bet.toLocaleString() +
                " credits. No payout this round.";

        }


        // =====================================
        // RESET THE GAME CONTROLS
        // =====================================

        coin.classList.remove("flipping");

        headsButton.disabled = false;
        tailsButton.disabled = false;

        betInput.disabled = false;

        // Re-enable quick bet buttons
        for (let i = 0; i < quickBetButtons.length; i++) {

            quickBetButtons[i].disabled = false;

        }

        isFlipping = false;

    }, 1100);

}
