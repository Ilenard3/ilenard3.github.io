
// NEON EMPIRE - COIN FLIP GAME

// Track whether the coin is currently flipping
let isFlipping = false;

// Flip the coin
function flipCoin(choice) {

    // Prevent another flip during animation
    if (isFlipping === true) {
        return;
    }

    // Get the player's bet
    let bet = getBet();

    // Stop if the bet is invalid
    if (bet === 0) {
        return;
    }

    // Generate a random result
    let random = Math.floor(Math.random() * 2);

    let result;

    if (random === 0) {
        result = "heads";
    }
    else {
        result = "tails";
    }

    // Start the animation
    isFlipping = true;

    let coin = document.getElementById("coin-disc");
    let coinFace = document.getElementById("coin-face");

    let headsButton = document.getElementById("heads-button");
    let tailsButton = document.getElementById("tails-button");
    let betInput = document.getElementById("bet");

    headsButton.disabled = true;
    tailsButton.disabled = true;
    betInput.disabled = true;

    coinFace.textContent = "🪙";

    document.getElementById("coin-status").textContent =
        "Flipping the coin...";

    document.getElementById("coin-result").textContent =
        "Good luck!";

    document.getElementById("coin-winnings").textContent =
        "Your bet: " + bet + " credits";

    // Restart animation
    coin.classList.remove("is-flipping");

    void coin.offsetWidth;

    coin.classList.add("is-flipping");

    // Show the result after the animation
    setTimeout(function() {

        let payout = 0;
        let message = "";

        // Show the coin result
        if (result === "heads") {
            coinFace.textContent = "👑";
        }
        else {
            coinFace.textContent = "🪙";
        }

        // Check whether the player won
        if (choice === result) {

            payout = bet * 2;

            message = "🎉 YOU WIN!";
        }
        else {

            payout = 0;

            message = "Better luck next time!";
        }

        // Update shared casino balance
        finishGame(bet, payout);

        // Display the outcome
        document.getElementById("coin-status").textContent =
            "The coin landed on " + result.toUpperCase() + "!";

        document.getElementById("coin-result").textContent =
            message;

        // Display winnings or losses
        if (payout > 0) {

            document.getElementById("coin-winnings").textContent =
                "You won " + bet + " credits in profit!" +
                " Total payout: " + payout + " credits.";
        }
        else {

            document.getElementById("coin-winnings").textContent =
                "You lost " + bet + " credits.";
        }

        // End animation
        coin.classList.remove("is-flipping");

        // Allow the player to flip again
        headsButton.disabled = false;
        tailsButton.disabled = false;
        betInput.disabled = false;

        isFlipping = false;

    }, 1000);
}
