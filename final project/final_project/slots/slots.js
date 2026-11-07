
// =====================================
// NEON EMPIRE - SLOT MACHINE GAME
// =====================================

// Track whether the machine is spinning
let isSpinning = false;

// Available slot machine symbols
let symbols = ["🍒", "🔔", "💎", "7️⃣", "⭐"];


// =====================================
// SET A BET AMOUNT
// =====================================

function setBet(amount) {

    if (isSpinning === true) {
        return;
    }

    document.getElementById("bet").value = amount;
}


// =====================================
// SPIN THE SLOT MACHINE
// =====================================

function spinSlots() {

    // Prevent multiple spins at once
    if (isSpinning === true) {
        return;
    }

    // Check the player's wager
    let bet = getBet();

    if (bet === 0) {
        return;
    }

    // Generate three random symbols
    let first = symbols[
        Math.floor(Math.random() * symbols.length)
    ];

    let second = symbols[
        Math.floor(Math.random() * symbols.length)
    ];

    let third = symbols[
        Math.floor(Math.random() * symbols.length)
    ];

    // Find the reel elements
    let reel1 = document.getElementById("slot1");
    let reel2 = document.getElementById("slot2");
    let reel3 = document.getElementById("slot3");

    let reelBox1 = document.getElementById("reel1");
    let reelBox2 = document.getElementById("reel2");
    let reelBox3 = document.getElementById("reel3");

    let spinButton = document.getElementById("spin-button");
    let betInput = document.getElementById("bet");

    let resultDisplay = document.getElementById("slot-result");
    let winningsDisplay = document.getElementById("slot-winnings");

    // Start the spinning animation
    isSpinning = true;

    spinButton.disabled = true;
    betInput.disabled = true;

    spinButton.textContent = "🎰 SPINNING...";

    resultDisplay.textContent = "GOOD LUCK!";

    winningsDisplay.textContent =
        "Your wager: " + bet + " credits.";

    // Add spinning classes
    reelBox1.classList.add("spinning");
    reelBox2.classList.add("spinning");
    reelBox3.classList.add("spinning");

    // Temporarily cycle through random symbols
    let spinAnimation = setInterval(function() {

        reel1.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        reel2.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        reel3.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

    }, 90);

    // Stop the reels and reveal the final result
    setTimeout(function() {

        clearInterval(spinAnimation);

        reel1.textContent = first;
        reel2.textContent = second;
        reel3.textContent = third;

        // Calculate the player's payout
        let payout = 0;
        let message = "";

        // Diamond jackpot
        if (
            first === "💎" &&
            second === "💎" &&
            third === "💎"
        ) {

            payout = bet * 10;
            message = "💎 DIAMOND JACKPOT!";
        }

        // Triple sevens
        else if (
            first === "7️⃣" &&
            second === "7️⃣" &&
            third === "7️⃣"
        ) {

            payout = bet * 7;
            message = "🎰 TRIPLE SEVENS!";
        }

        // Any other three matching symbols
        else if (
            first === second &&
            second === third
        ) {

            payout = bet * 5;
            message = "🏆 THREE MATCHING SYMBOLS!";
        }

        // Exactly two matching symbols
        else if (
            first === second ||
            first === third ||
            second === third
        ) {

            payout = bet * 2;
            message = "✨ TWO MATCHING SYMBOLS!";
        }

        // No matching symbols
        else {

            payout = 0;
            message = "NO MATCH. TRY AGAIN!";
        }

        // Update the shared casino wallet
        finishGame(bet, payout);

        // Display the result
        resultDisplay.textContent = message;

        if (payout > 0) {

            let profit = payout - bet;

            winningsDisplay.textContent =
                "Payout: " + payout.toLocaleString() +
                " credits | Profit: " +
                profit.toLocaleString() + " credits.";
        }

        else {

            winningsDisplay.textContent =
                "You lost " + bet.toLocaleString() +
                " credits. Better luck next spin!";
        }

        // End the reel animations
        reelBox1.classList.remove("spinning");
        reelBox2.classList.remove("spinning");
        reelBox3.classList.remove("spinning");

        // Allow another spin
        spinButton.disabled = false;
        betInput.disabled = false;

        spinButton.textContent = "🎰 SPIN THE REELS";

        isSpinning = false;

    }, 1300);
}
