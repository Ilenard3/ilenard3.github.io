
// ==========================================
// NEON EMPIRE CASINO
// ADVANCED SLOT MACHINE GAME
// ==========================================


// Track whether the machine is spinning
let isSpinning = false;


// ==========================================
// SLOT MACHINE SYMBOLS
// ==========================================

let symbols = [

    {
        id: "diamond",
        image: "💎",
        name: "Diamond",
        triplePayout: 12,
        pairPayout: 4
    },

    {
        id: "seven",
        image: "7️⃣",
        name: "Lucky Seven",
        triplePayout: 8,
        pairPayout: 3
    },

    {
        id: "crown",
        image: "👑",
        name: "Royal Crown",
        triplePayout: 6,
        pairPayout: 3
    },

    {
        id: "money",
        image: "💰",
        name: "Money Bag",
        triplePayout: 5,
        pairPayout: 2
    },

    {
        id: "clover",
        image: "🍀",
        name: "Lucky Clover",
        triplePayout: 4,
        pairPayout: 2
    },

    {
        id: "star",
        image: "⭐",
        name: "Golden Star",
        triplePayout: 4,
        pairPayout: 2
    },

    {
        id: "bell",
        image: "🔔",
        name: "Golden Bell",
        triplePayout: 3,
        pairPayout: 2
    },

    {
        id: "cherry",
        image: "🍒",
        name: "Cherry",
        triplePayout: 3,
        pairPayout: 2
    }

];


// ==========================================
// RANDOM SYMBOL GENERATOR
// ==========================================

function getRandomSymbol() {

    let randomNumber = Math.floor(
        Math.random() * symbols.length
    );

    return symbols[randomNumber];

}


// ==========================================
// QUICK BET BUTTONS
// ==========================================

function setBet(amount) {

    if (isSpinning === true) {
        return;
    }

    document.getElementById("bet").value = amount;

}


// ==========================================
// MAIN SLOT MACHINE FUNCTION
// ==========================================

function spinSlots() {

    // Prevent multiple spins
    if (isSpinning === true) {
        return;
    }

    // Check the player's wager
    let bet = getBet();

    if (bet === 0) {
        return;
    }


    // Generate the three final symbols
    let first = getRandomSymbol();
    let second = getRandomSymbol();
    let third = getRandomSymbol();


    // Get reel elements
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

    let quickBetButtons = document.querySelectorAll(
        ".slot-bet-options button"
    );


    // Start spinning
    isSpinning = true;

    spinButton.disabled = true;
    betInput.disabled = true;

    // Disable quick bet buttons
    for (let i = 0; i < quickBetButtons.length; i++) {

        quickBetButtons[i].disabled = true;

    }


    // Update the message
    spinButton.textContent = "🎰 SPINNING...";

    resultDisplay.textContent = "GOOD LUCK!";

    winningsDisplay.textContent =
        "Your wager: " + bet.toLocaleString() + " credits.";


    // Start reel animations
    reelBox1.classList.add("spinning");
    reelBox2.classList.add("spinning");
    reelBox3.classList.add("spinning");


    // Temporarily cycle through symbols
    let spinAnimation = setInterval(function() {

        reel1.textContent = getRandomSymbol().image;

        reel2.textContent = getRandomSymbol().image;

        reel3.textContent = getRandomSymbol().image;

    }, 90);


    // Stop the reels after the animation
    setTimeout(function() {

        clearInterval(spinAnimation);


        // Show final symbols
        reel1.textContent = first.image;

        reel2.textContent = second.image;

        reel3.textContent = third.image;


        // Payout variables
        let payout = 0;

        let multiplier = 0;

        let message = "";

        let winningSymbol = null;


        // =====================================
        // CHECK FOR THREE MATCHING SYMBOLS
        // =====================================

        if (
            first.id === second.id &&
            second.id === third.id
        ) {

            winningSymbol = first;

            multiplier = first.triplePayout;

            payout = bet * multiplier;


            // Diamond jackpot
            if (first.id === "diamond") {

                message = "💎 DIAMOND JACKPOT!";

            }

            // Lucky seven jackpot
            else if (first.id === "seven") {

                message = "🎰 TRIPLE SEVENS!";

            }

            // Other triple matches
            else {

                message =
                    "🏆 THREE " +
                    first.name.toUpperCase() +
                    " SYMBOLS!";

            }

        }


        // =====================================
        // CHECK FOR EXACTLY TWO MATCHING SYMBOLS
        // =====================================

        else if (
            first.id === second.id ||
            first.id === third.id ||
            second.id === third.id
        ) {

            // Identify which symbol matches
            if (first.id === second.id) {

                winningSymbol = first;

            }
            else if (first.id === third.id) {

                winningSymbol = first;

            }
            else {

                winningSymbol = second;

            }


            multiplier = winningSymbol.pairPayout;

            payout = bet * multiplier;

            message =
                "✨ " +
                winningSymbol.name.toUpperCase() +
                " PAIR!";

        }


        // =====================================
        // NO MATCHING SYMBOLS
        // =====================================

        else {

            payout = 0;

            multiplier = 0;

            message = "NO MATCH. BETTER LUCK NEXT TIME!";

        }


        // =====================================
        // UPDATE SHARED CASINO BALANCE
        // =====================================

        finishGame(bet, payout);


        // Display game result
        resultDisplay.textContent = message;


        // Display payout and profit
        if (payout > 0) {

            let profit = payout - bet;

            winningsDisplay.textContent =
                "Total payout: " +
                payout.toLocaleString() +
                " credits | Profit: " +
                profit.toLocaleString() +
                " credits | " +
                multiplier +
                "x multiplier.";

        }

        else {

            winningsDisplay.textContent =
                "You lost " +
                bet.toLocaleString() +
                " credits. No payout this spin.";

        }


        // Stop reel animations
        reelBox1.classList.remove("spinning");

        reelBox2.classList.remove("spinning");

        reelBox3.classList.remove("spinning");


        // Re-enable controls
        spinButton.disabled = false;

        betInput.disabled = false;


        for (let i = 0; i < quickBetButtons.length; i++) {

            quickBetButtons[i].disabled = false;

        }


        // Allow another spin
        isSpinning = false;

        spinButton.textContent = "🎰 SPIN THE REELS";


    }, 1400);

}
