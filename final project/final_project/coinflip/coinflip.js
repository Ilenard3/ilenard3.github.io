
// ==========================================
// NEON EMPIRE CASINO
// COIN FLIP GAME JAVASCRIPT
// ==========================================


// Track whether a coin flip is happening
let isFlipping = false;


// ==========================================
// QUICK BET BUTTONS
// ==========================================

function setBet(amount) {

    // Prevent changing bets during a flip
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

    // Check the player's bet
    let bet = getBet();

    // Stop if the bet is invalid
    if (bet === 0) {
        return;
    }

    // Generate a random result
    let randomNumber = Math.floor(Math.random() * 2);

    let result;

    if (randomNumber === 0) {
        result = "heads";
    }
    else {
        result = "tails";
    }

    // Find HTML elements
    let coin = document.getElementById("coin-disc");

    let coinFace = document.getElementById("coin-face-symbol");

    let status = document.getElementById("coin-status");

    let substatus = document.getElementById("coin-substatus");

    let resultDisplay = document.getElementById("coin-result");

    let winningsDisplay = document.getElementById("coin-winnings");

    let headsButton = document.getElementById("heads-button");

    let tailsButton = document.getElementById("tails-button");

    let betInput = document.getElementById("bet");

    let quickBetButtons = document.querySelectorAll(".quick-bets button");


    // Start the game
    isFlipping = true;

    // Disable controls during the flip
    headsButton.disabled = true;
    tailsButton.disabled = true;
    betInput.disabled = true;

    for (let i = 0; i < quickBetButtons.length; i++) {
        quickBetButtons[i].disabled = true;
    }


    // Update the messages
    status.textContent = "THE COIN IS FLIPPING...";

    substatus.textContent = "Good luck!";

    resultDisplay.textContent = "GOOD LUCK!";

    winningsDisplay.textContent =
        "Your wager: " + bet.toLocaleString() + " credits.";


    // Clear the previous coin result
    coinFace.textContent = "?";


    // Restart the coin animation
    coin.classList.remove("flipping");

    void coin.offsetWidth;

    coin.classList.add("flipping");


    // Reveal the result when the animation finishes
    setTimeout(function() {

        let payout = 0;

        let message = "";


        // Show which side the coin landed on
        if (result === "heads") {

            coinFace.textContent = "👑";
        }
        else {

            coinFace.textContent = "🪙";
        }


        // Check the player's prediction
        if (choice === result) {

            payout = bet * 2;

            message = "🎉 YOU WIN!";
        }
        else {

            payout = 0;

            message = "BETTER LUCK NEXT TIME!";
        }


        // Update the shared casino account
        finishGame(bet, payout);


        // Display the result
        status.textContent =
            "THE COIN LANDED ON " + result.toUpperCase() + "!";

        substatus.textContent =
            "You selected " + choice.toUpperCase() + ".";

        resultDisplay.textContent = message;


        // Display winnings or losses
        if (payout > 0) {

            let profit = payout - bet;

            winningsDisplay.textContent =
                "Total payout: " + payout.toLocaleString() +
                " credits. Profit: " + profit.toLocaleString() +
                " credits.";

        }
        else {

            winningsDisplay.textContent =
                "You lost " + bet.toLocaleString() +
                " credits. Try again!";

        }


        // Remove the animation class
        coin.classList.remove("flipping");


        // Re-enable game controls
        headsButton.disabled = false;
        tailsButton.disabled = false;
        betInput.disabled = false;

        for (let i = 0; i < quickBetButtons.length; i++) {
            quickBetButtons[i].disabled = false;
        }


        // Allow another coin flip
        isFlipping = false;

    }, 1100);

}
