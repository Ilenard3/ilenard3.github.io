
// =====================================
// NEON EMPIRE - COIN FLIP GAME
// =====================================

// Tracks whether a coin flip is happening
let isFlipping = false;


// =====================================
// SET A BET AMOUNT
// =====================================

function setBet(amount) {

    if (isFlipping === true) {
        return;
    }

    document.getElementById("bet").value = amount;
}


// =====================================
// FLIP THE COIN
// =====================================

function flipCoin(choice) {

    // Prevent multiple flips at once
    if (isFlipping === true) {
        return;
    }

    // Check the player's wager
    let bet = getBet();

    if (bet === 0) {
        return;
    }

    // Generate a random coin result
    let randomNumber = Math.floor(Math.random() * 2);

    let result;

    if (randomNumber === 0) {
        result = "heads";
    }
    else {
        result = "tails";
    }

    // Find the HTML elements
    let coin = document.getElementById("coin-disc");
    let coinFace = document.getElementById("coin-face");

    let status = document.getElementById("coin-status");
    let coinResult = document.getElementById("coin-result");
    let winnings = document.getElementById("coin-winnings");

    let headsButton = document.getElementById("heads-button");
    let tailsButton = document.getElementById("tails-button");
    let betInput = document.getElementById("bet");

    // Start the flip
    isFlipping = true;

    headsButton.disabled = true;
    tailsButton.disabled = true;
    betInput.disabled = true;

    // Update messages
    status.textContent = "THE COIN IS FLIPPING...";
    coinResult.textContent = "GOOD LUCK!";
    winnings.textContent = "Your wager: " + bet + " credits.";

    coinFace.textContent = "?";

    // Restart the animation
    coin.classList.remove("flipping");

    void coin.offsetWidth;

    coin.classList.add("flipping");

    // Reveal the outcome after the animation
    setTimeout(function() {

        let payout = 0;
        let message = "";

        // Display the correct coin side
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

        // Update the shared casino wallet
        finishGame(bet, payout);

        // Display the result
        status.textContent =
            "THE COIN LANDED ON " + result.toUpperCase() + "!";

        coinResult.textContent = message;

        // Display the payout
        if (payout > 0) {

            winnings.textContent =
                "You received " + payout +
                " credits. Profit: " + bet + " credits.";
        }
        else {

            winnings.textContent =
                "You lost " + bet + " credits.";
        }

        // Remove animation class
        coin.classList.remove("flipping");

        // Allow another game
        headsButton.disabled = false;
        tailsButton.disabled = false;
        betInput.disabled = false;

        isFlipping = false;

    }, 1100);
}
