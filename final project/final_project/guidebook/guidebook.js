
// ==========================================
// NEON EMPIRE CASINO
// ROYAL CASINO ACADEMY
// COMPLETE JAVASCRIPT
// ==========================================

// The academy never changes casino credits.

// ==========================================
// SIX COMPLETE GAME MANUALS
// ==========================================

const casinoGuides = {

    blackjack: {
        title: "Blackjack",
        icon: "🃏",
        description: "Beat the dealer without going over 21.",
        sections: [
            {
                title: "01 | 🃏 Game Overview",
                content: `
                    <p>Blackjack is a card game played
                    against the dealer. Your goal is to
                    finish closer to 21 than the dealer
                    without exceeding 21.</p>
                    <p>A game uses one or more standard
                    decks of 52 playing cards.</p>
                `
            },
            {
                title: "02 | ♠ Card Values",
                content: `
                    <ul>
                        <li><strong>2 through 10:</strong>
                        Face value.</li>
                        <li><strong>Jack, Queen, King:</strong>
                        10 points each.</li>
                        <li><strong>Ace:</strong>
                        1 or 11 points.</li>
                    </ul>
                    <div class="manual-example">
                        <h4>👑 Example</h4>
                        <p>Ace + King = 21.
                        This is a natural blackjack
                        when dealt as your first
                        two cards.</p>
                    </div>
                `
            },
            {
                title: "03 | 🎯 How to Play",
                content: `
                    <ol>
                        <li>Place your wager.</li>
                        <li>Receive two cards.</li>
                        <li>Check the dealer's visible card.</li>
                        <li>Choose Hit, Stand, Double,
                        or Split when permitted.</li>
                        <li>The dealer completes their hand.</li>
                        <li>Compare totals to determine
                        the result.</li>
                    </ol>
                `
            },
            {
                title: "04 | 🎮 Player Decisions",
                content: `
                    <ul>
                        <li><strong>Hit:</strong>
                        Take another card.</li>
                        <li><strong>Stand:</strong>
                        Keep your hand.</li>
                        <li><strong>Double Down:</strong>
                        Double the wager and receive
                        one additional card.</li>
                        <li><strong>Split:</strong>
                        Divide an eligible pair into
                        two hands with another wager.</li>
                        <li><strong>Surrender:</strong>
                        At tables offering it, give up
                        the hand and recover half
                        your wager.</li>
                    </ul>
                `
            },
            {
                title: "05 | 💰 Payout Guide",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr><th>Result</th><th>Profit</th></tr>
                            <tr><td>Regular Win</td><td>1:1</td></tr>
                            <tr><td>Natural Blackjack</td>
                            <td>Often 3:2</td></tr>
                            <tr><td>Push</td>
                            <td>Wager returned</td></tr>
                            <tr><td>Loss</td>
                            <td>Wager lost</td></tr>
                        </table>
                    </div>
                    <p class="manual-note">
                    Some casinos pay 6:5 for blackjack.
                    Table rules vary.</p>
                `
            },
            {
                title: "06 | ⭐ Beginner Knowledge",
                content: `
                    <p>Learn basic strategy for the
                    particular table rules. Check
                    whether the dealer hits soft 17.</p>
                    <p>A total over 21 is a bust.
                    No betting system guarantees
                    a win.</p>
                `
            }
        ]
    },

    roulette: {
        title: "Roulette",
        icon: "🎡",
        description: "Discover the wheel, numbers, and bets.",
        sections: [
            {
                title: "01 | 🎡 Game Overview",
                content: `
                    <p>Roulette uses a spinning wheel
                    and a small ball. Players wager
                    on the pocket where the ball
                    will stop.</p>
                    <p>European roulette has 37
                    pockets, including one zero.
                    American roulette has 38,
                    including zero and double zero.</p>
                `
            },
            {
                title: "02 | 🔴 How to Play",
                content: `
                    <ol>
                        <li>Choose a betting area.</li>
                        <li>Place chips before betting closes.</li>
                        <li>The dealer spins the wheel.</li>
                        <li>The ball settles into a pocket.</li>
                        <li>Winning bets are paid.</li>
                    </ol>
                `
            },
            {
                title: "03 | 🎯 Popular Bets",
                content: `
                    <ul>
                        <li><strong>Straight:</strong>
                        One number.</li>
                        <li><strong>Split:</strong>
                        Two adjacent numbers.</li>
                        <li><strong>Street:</strong>
                        Three numbers.</li>
                        <li><strong>Corner:</strong>
                        Four numbers.</li>
                        <li><strong>Dozen:</strong>
                        Twelve numbers.</li>
                        <li><strong>Red/Black:</strong>
                        A color.</li>
                        <li><strong>Odd/Even:</strong>
                        Number parity.</li>
                    </ul>
                `
            },
            {
                title: "04 | 💰 Standard Payouts",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr><th>Bet</th><th>Profit</th></tr>
                            <tr><td>Straight</td><td>35:1</td></tr>
                            <tr><td>Split</td><td>17:1</td></tr>
                            <tr><td>Street</td><td>11:1</td></tr>
                            <tr><td>Corner</td><td>8:1</td></tr>
                            <tr><td>Dozen</td><td>2:1</td></tr>
                            <tr><td>Red/Black</td><td>1:1</td></tr>
                        </table>
                    </div>
                `
            },
            {
                title: "05 | 🏆 Example Round",
                content: `
                    <div class="manual-example">
                        <h4>🔴 Red Bet</h4>
                        <p>A 100-credit example bet
                        on red wins 100 credits in
                        profit if a red pocket lands.
                        The original wager is also
                        returned.</p>
                    </div>
                `
            },
            {
                title: "06 | ⭐ Understanding Odds",
                content: `
                    <p>Standard European roulette
                    has approximately a 2.70%
                    house edge. Standard American
                    roulette has approximately
                    a 5.26% house edge.</p>
                    <p>Previous spins do not
                    determine future results.
                    Special rules can change
                    the edge on some bets.</p>
                `
            }
        ]
    },

    poker: {
        title: "Texas Hold'em Poker",
        icon: "♠️",
        description: "Learn poker hands, betting, and showdowns.",
        sections: [
            {
                title: "01 | ♠ Game Overview",
                content: `
                    <p>Texas Hold'em is usually
                    played against other players.</p>
                    <p>Each player receives two
                    private cards. Five community
                    cards are dealt face up.
                    The best five-card hand wins
                    at showdown.</p>
                `
            },
            {
                title: "02 | 🃏 Starting the Hand",
                content: `
                    <ol>
                        <li>The dealer button marks
                        the dealer position.</li>
                        <li>Small and big blinds
                        are posted.</li>
                        <li>Players receive two
                        private cards.</li>
                        <li>Pre-flop betting begins.</li>
                    </ol>
                `
            },
            {
                title: "03 | 🎯 Betting Rounds",
                content: `
                    <ol>
                        <li><strong>Pre-Flop:</strong>
                        Before community cards.</li>
                        <li><strong>Flop:</strong>
                        Three community cards.</li>
                        <li><strong>Turn:</strong>
                        Fourth community card.</li>
                        <li><strong>River:</strong>
                        Fifth community card.</li>
                    </ol>
                    <p>Players can check, bet,
                    call, raise, or fold when
                    permitted.</p>
                `
            },
            {
                title: "04 | 🏆 Hand Rankings",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr><th>Rank</th><th>Hand</th></tr>
                            <tr><td>1</td><td>Royal Flush</td></tr>
                            <tr><td>2</td><td>Straight Flush</td></tr>
                            <tr><td>3</td><td>Four of a Kind</td></tr>
                            <tr><td>4</td><td>Full House</td></tr>
                            <tr><td>5</td><td>Flush</td></tr>
                            <tr><td>6</td><td>Straight</td></tr>
                            <tr><td>7</td><td>Three of a Kind</td></tr>
                            <tr><td>8</td><td>Two Pair</td></tr>
                            <tr><td>9</td><td>One Pair</td></tr>
                            <tr><td>10</td><td>High Card</td></tr>
                        </table>
                    </div>
                `
            },
            {
                title: "05 | 👑 Example Hand",
                content: `
                    <div class="manual-example">
                        <h4>Royal Flush</h4>
                        <p>Your cards: A♠ K♠</p>
                        <p>Community cards:
                        Q♠ J♠ 10♠ 3♦ 2♣</p>
                        <p>Your best five cards
                        form a royal flush.</p>
                    </div>
                `
            },
            {
                title: "06 | ⭐ Beginner Knowledge",
                content: `
                    <p>You can win when all opponents
                    fold, even without the best hand.</p>
                    <p>Learn the betting actions,
                    blinds, and hand rankings.
                    Casino poker rooms commonly
                    charge a rake or fee.</p>
                `
            }
        ]
    },

    craps: {
        title: "Craps",
        icon: "🎲",
        description: "Learn the come-out roll and point system.",
        sections: [
            {
                title: "01 | 🎲 Game Overview",
                content: `
                    <p>Craps uses two six-sided dice.
                    Players wager on the outcome
                    of the rolls.</p>
                    <p>The person rolling is
                    called the shooter.</p>
                `
            },
            {
                title: "02 | ⭐ Come-Out Roll",
                content: `
                    <ul>
                        <li><strong>7 or 11:</strong>
                        Pass Line wins.</li>
                        <li><strong>2, 3, or 12:</strong>
                        Pass Line loses.</li>
                        <li><strong>4, 5, 6, 8, 9, 10:</strong>
                        A point is established.</li>
                    </ul>
                `
            },
            {
                title: "03 | 🎯 Point Phase",
                content: `
                    <p>Once a point is established,
                    the shooter continues rolling.</p>
                    <ul>
                        <li>Repeat the point before
                        a 7: Pass Line wins.</li>
                        <li>Roll a 7 before the point:
                        Pass Line loses.</li>
                        <li>Other rolls continue
                        the round.</li>
                    </ul>
                `
            },
            {
                title: "04 | 💰 Popular Bets",
                content: `
                    <ul>
                        <li><strong>Pass Line:</strong>
                        Follows the standard point rules.</li>
                        <li><strong>Don't Pass:</strong>
                        Generally bets against the shooter.
                        A come-out 12 usually pushes.</li>
                        <li><strong>Come:</strong>
                        Similar to Pass Line after
                        a point is established.</li>
                        <li><strong>Place:</strong>
                        Bet on a number before 7.</li>
                        <li><strong>Odds:</strong>
                        Additional eligible bets
                        usually paid at true odds.</li>
                    </ul>
                `
            },
            {
                title: "05 | 🏆 Payout Examples",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr><th>Bet</th><th>Profit</th></tr>
                            <tr><td>Pass Line</td><td>1:1</td></tr>
                            <tr><td>Don't Pass</td><td>1:1</td></tr>
                            <tr><td>Place 6/8</td><td>7:6</td></tr>
                            <tr><td>Place 5/9</td><td>7:5</td></tr>
                            <tr><td>Place 4/10</td><td>9:5</td></tr>
                        </table>
                    </div>
                `
            },
            {
                title: "06 | ⭐ Example and Tips",
                content: `
                    <div class="manual-example">
                        <h4>Pass Line Example</h4>
                        <p>The shooter rolls 6
                        on the come-out roll.
                        The point becomes 6.</p>
                        <p>Later, 6 appears before 7.
                        The Pass Line bet wins.</p>
                    </div>
                    <p>Each roll is independent.
                    Learn the Pass Line before
                    exploring more complex bets.</p>
                `
            }
        ]
    },

    baccarat: {
        title: "Baccarat",
        icon: "♦️",
        description: "Discover the Player and Banker hands.",
        sections: [
            {
                title: "01 | ♦ Game Overview",
                content: `
                    <p>In common Punto Banco
                    Baccarat, two hands called
                    Player and Banker compete
                    to finish closest to nine.</p>
                    <p>You wager on Player,
                    Banker, or Tie.</p>
                `
            },
            {
                title: "02 | 🃏 Card Values",
                content: `
                    <ul>
                        <li>Ace = 1</li>
                        <li>2 through 9 = Face value</li>
                        <li>10, Jack, Queen, King = 0</li>
                    </ul>
                    <p>Only the final digit counts.</p>
                    <div class="manual-example">
                        <h4>Example</h4>
                        <p>7 + 8 = 15, which counts
                        as 5 in Baccarat.</p>
                    </div>
                `
            },
            {
                title: "03 | 🎯 How to Play",
                content: `
                    <ol>
                        <li>Choose Player, Banker,
                        or Tie.</li>
                        <li>Two cards are dealt
                        to each hand.</li>
                        <li>Check for natural
                        totals of 8 or 9.</li>
                        <li>Additional cards are
                        drawn under fixed rules.</li>
                        <li>The total closest
                        to 9 wins.</li>
                    </ol>
                `
            },
            {
                title: "04 | 💰 Payouts",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr><th>Bet</th><th>Typical Profit</th></tr>
                            <tr><td>Player</td><td>1:1</td></tr>
                            <tr><td>Banker</td>
                            <td>0.95:1 after commission</td></tr>
                            <tr><td>Tie</td>
                            <td>Often 8:1</td></tr>
                        </table>
                    </div>
                    <p>Commission and payout
                    schedules vary by casino.</p>
                `
            },
            {
                title: "05 | 👑 Example Round",
                content: `
                    <div class="manual-example">
                        <h4>Player Wins</h4>
                        <p>Player has 9 and Banker
                        has 6. Player wins.</p>
                        <p>A winning 100-credit
                        example Player bet earns
                        100 credits in profit.</p>
                    </div>
                `
            },
            {
                title: "06 | ⭐ Beginner Knowledge",
                content: `
                    <p>Player and Banker are names
                    of hands, not the people
                    placing bets.</p>
                    <p>Players do not choose to
                    hit or stand in Punto Banco.
                    Past results do not control
                    future hands.</p>
                `
            }
        ]
    },

    threecard: {
        title: "Three Card Poker",
        icon: "♥️",
        description: "Learn three-card hands and dealer qualification.",
        sections: [
            {
                title: "01 | ♥ Game Overview",
                content: `
                    <p>Three Card Poker is a casino
                    game where the player and dealer
                    each receive three cards.</p>
                    <p>This guide covers the
                    common Ante and Play version.</p>
                `
            },
            {
                title: "02 | 🎯 How to Play",
                content: `
                    <ol>
                        <li>Place an Ante wager.</li>
                        <li>Receive three cards.</li>
                        <li>Choose Fold or Play.</li>
                        <li>A Play wager must
                        equal the Ante.</li>
                        <li>The dealer reveals
                        their hand.</li>
                        <li>Compare the hands.</li>
                    </ol>
                `
            },
            {
                title: "03 | 🏆 Hand Rankings",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr><th>Rank</th><th>Hand</th></tr>
                            <tr><td>1</td><td>Straight Flush</td></tr>
                            <tr><td>2</td><td>Three of a Kind</td></tr>
                            <tr><td>3</td><td>Straight</td></tr>
                            <tr><td>4</td><td>Flush</td></tr>
                            <tr><td>5</td><td>Pair</td></tr>
                            <tr><td>6</td><td>High Card</td></tr>
                        </table>
                    </div>
                    <p>Unlike five-card poker,
                    a straight ranks above a flush.</p>
                `
            },
            {
                title: "04 | 👑 Dealer Qualification",
                content: `
                    <p>The dealer commonly needs
                    Queen-high or better to qualify.</p>
                    <ul>
                        <li>Dealer doesn't qualify:
                        Ante pays 1:1 and Play pushes.</li>
                        <li>Dealer qualifies and
                        player wins: both pay 1:1.</li>
                        <li>Dealer qualifies and
                        player loses: both lose.</li>
                        <li>Tie: both push.</li>
                    </ul>
                `
            },
            {
                title: "05 | 💰 Ante Bonus",
                content: `
                    <p>Many tables offer an Ante
                    Bonus for strong hands.</p>
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr><th>Hand</th><th>Example Bonus</th></tr>
                            <tr><td>Straight Flush</td><td>5:1</td></tr>
                            <tr><td>Three of a Kind</td><td>4:1</td></tr>
                            <tr><td>Straight</td><td>1:1</td></tr>
                        </table>
                    </div>
                    <p>Bonus schedules vary.
                    Pair Plus is a separate
                    optional bet.</p>
                `
            },
            {
                title: "06 | ⭐ Example and Tips",
                content: `
                    <div class="manual-example">
                        <h4>Winning Hand</h4>
                        <p>Your pair of Kings beats
                        the dealer's qualifying
                        pair of Tens.</p>
                        <p>Both Ante and Play
                        win at 1:1.</p>
                    </div>
                    <p>Memorize the special
                    hand rankings and check
                    the dealer qualification rules.</p>
                `
            }
        ]
    }
};

// ==========================================
// ACADEMY SETTINGS AND SAVED PROGRESS
// ==========================================

const academyGameIds = Object.keys(casinoGuides);

let currentGuide = null;
let activeCategory = "all";
let quizIndex = 0;
let quizPoints = 0;
let quizAnswered = false;

function readProgress(key) {
    try {
        const saved = JSON.parse(
            localStorage.getItem(key) || "[]"
        );

        if (!Array.isArray(saved)) {
            return [];
        }

        return [...new Set(saved.filter(function(id) {
            return academyGameIds.includes(id);
        }))];
    }
    catch (error) {
        return [];
    }
}

let completedGuides = readProgress("neonAcademyGuides");
let passedQuizzes = readProgress("neonAcademyQuizzes");

function saveAcademyProgress() {
    localStorage.setItem(
        "neonAcademyGuides",
        JSON.stringify(completedGuides)
    );

    localStorage.setItem(
        "neonAcademyQuizzes",
        JSON.stringify(passedQuizzes)
    );
}

// ==========================================
// UPDATE ACADEMY DASHBOARD
// ==========================================

function updateAcademyProgress() {
    const completed = completedGuides.length;
    const passed = passedQuizzes.length;
    const percent = Math.round(completed / 6 * 100);

    document.getElementById(
        "guides-completed"
    ).textContent = completed + " / 6";

    document.getElementById(
        "quizzes-passed"
    ).textContent = passed + " / 6";

    document.getElementById(
        "progress-percent"
    ).textContent = percent + "%";

    document.getElementById(
        "progress-fill"
    ).style.width = percent + "%";

    document.getElementById(
        "academy-progress"
    ).setAttribute("aria-valuenow", percent);

    let rank = "ROOKIE";

    if (completed >= 2) rank = "STUDENT";
    if (completed >= 4) rank = "EXPERT";

    if (completed === 6 && passed === 6) {
        rank = "ROYAL MASTER";
    }

    document.getElementById(
        "academy-rank"
    ).textContent = rank;

    let message = "📖 Your casino education starts here!";

    if (completed > 0) {
        message = "⭐ " + completed +
            " of 6 manuals completed!";
    }

    if (completed === 6) {
        message = "👑 All manuals completed! Finish the quizzes.";
    }

    if (completed === 6 && passed === 6) {
        message = "🏆 ROYAL MASTER! Academy completed!";
    }

    document.getElementById(
        "progress-message"
    ).textContent = message;

    document.querySelectorAll(
        ".guide-completion"
    ).forEach(function(label) {
        const done = completedGuides.includes(
            label.dataset.completion
        );

        label.textContent = done
            ? "✅ GUIDE COMPLETED"
            : "📖 Not Yet Completed";

        label.classList.toggle("completed", done);
    });
}

// ==========================================
// DISPLAY A COMPLETE MANUAL
// ==========================================

function openGuide(gameName) {
    const game = casinoGuides[gameName];

    if (!game) return;

    currentGuide = gameName;

    document.getElementById(
        "manual-title"
    ).textContent = game.title;

    document.getElementById(
        "manual-icon"
    ).textContent = game.icon;

    document.getElementById(
        "manual-description"
    ).textContent = game.description;

    const content = document.getElementById(
        "manual-content"
    );

    const toc = document.getElementById(
        "manual-toc-links"
    );

    content.innerHTML = "";
    toc.innerHTML = "";

    game.sections.forEach(function(section, index) {
        const panel = document.createElement("article");
        panel.className = "manual-panel";
        panel.id = "manual-topic-" + index;

        const heading = document.createElement("h3");
        heading.textContent = section.title;

        const information = document.createElement("div");

        // Static content authored in this file only.
        information.innerHTML = section.content;

        panel.appendChild(heading);
        panel.appendChild(information);
        content.appendChild(panel);

        const tocButton = document.createElement("button");
        tocButton.type = "button";
        tocButton.textContent = section.title;

        tocButton.addEventListener("click", function() {
            panel.scrollIntoView({
                behavior: motionPreference(),
                block: "start"
            });
        });

        toc.appendChild(tocButton);
    });

    document.getElementById(
        "game-library"
    ).hidden = true;

    document.getElementById(
        "manual-section"
    ).hidden = false;

    document.getElementById(
        "completion-message"
    ).textContent = completedGuides.includes(gameName)
        ? "✅ You've already completed this manual!"
        : "";

    resetQuizDisplay();

    document.getElementById(
        "manual-section"
    ).scrollIntoView({
        behavior: motionPreference(),
        block: "start"
    });
}

function motionPreference() {
    return window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches ? "auto" : "smooth";
}

// ==========================================
// RETURN TO GAME LIBRARY
// ==========================================

function showGuideLibrary() {
    document.getElementById(
        "manual-section"
    ).hidden = true;

    document.getElementById(
        "game-library"
    ).hidden = false;

    document.getElementById(
        "game-library"
    ).scrollIntoView({
        behavior: motionPreference(),
        block: "start"
    });
}

// ==========================================
// SEARCH AND CATEGORY FILTERS
// ==========================================

function filterAcademyGames() {
    const search = document.getElementById(
        "game-search"
    ).value.toLowerCase().trim();

    let visible = 0;

    document.querySelectorAll(
        ".guide-game-card"
    ).forEach(function(card) {
        const matchesText =
            card.dataset.name.includes(search);

        const matchesCategory =
            activeCategory === "all" ||
            card.dataset.category === activeCategory;

        card.hidden = !(matchesText && matchesCategory);

        if (!card.hidden) visible++;
    });

    document.getElementById(
        "search-count"
    ).textContent = "Showing " + visible +
        " of 6 casino games.";

    document.getElementById(
        "no-results"
    ).hidden = visible !== 0;
}

// ==========================================
// QUIZ QUESTION BANK
// ==========================================

// Each question contains four answers.
// The third value is the correct answer index.

const academyQuestions = {
    blackjack: [
        ["What is the goal of Blackjack?",
         ["Reach 30", "Beat the dealer without exceeding 21",
          "Get four matching cards", "Collect five cards"], 1],
        ["How many points is a King worth?",
         ["5", "10", "11", "13"], 1],
        ["What does Hit mean?",
         ["Take another card", "Stand", "Split", "Fold"], 0],
        ["What is a natural Blackjack?",
         ["Three cards totaling 21", "Any 20",
          "Ace and ten-value card as the first two cards",
          "Two Aces"], 2],
        ["What happens on a push?",
         ["Double payout", "Half wager lost",
          "Wager returned", "Automatic loss"], 2]
    ],

    roulette: [
        ["How many pockets are on a European wheel?",
         ["36", "37", "38", "40"], 1],
        ["What is the standard profit payout for red?",
         ["1:1", "2:1", "5:1", "35:1"], 0],
        ["A straight-up bet covers how many numbers?",
         ["2", "4", "1", "12"], 2],
        ["What color is zero?",
         ["Red", "Black", "Blue", "Green"], 3],
        ["What is the standard straight-up profit payout?",
         ["1:1", "8:1", "17:1", "35:1"], 3]
    ],

    poker: [
        ["How many private cards are dealt?",
         ["2", "3", "4", "5"], 0],
        ["How many community cards are eventually dealt?",
         ["2", "3", "4", "5"], 3],
        ["Which is the highest standard poker hand?",
         ["Full House", "Royal Flush", "Straight", "Pair"], 1],
        ["What is the Flop?",
         ["Final card", "First three community cards",
          "Private cards", "Dealer button"], 1],
        ["What does Fold mean?",
         ["Call", "Raise", "Give up your hand", "Win"], 2]
    ],

    craps: [
        ["How many dice are used in Craps?",
         ["1", "2", "3", "4"], 1],
        ["Which come-out total wins Pass Line?",
         ["2", "3", "7", "12"], 2],
        ["Which number can become a point?",
         ["2", "3", "6", "11"], 2],
        ["What does a Pass Line win pay in profit?",
         ["1:1", "2:1", "5:1", "10:1"], 0],
        ["What happens if 7 appears before the point?",
         ["Pass wins", "Pass loses",
          "Point doubles", "Nothing"], 1]
    ],

    baccarat: [
        ["What is the target total in Baccarat?",
         ["7", "9", "11", "21"], 1],
        ["How many points is a Queen worth?",
         ["0", "1", "10", "12"], 0],
        ["What does a total of 15 count as?",
         ["15", "10", "5", "1"], 2],
        ["What are the two main hands called?",
         ["Red and Black", "Player and Banker",
          "King and Queen", "Dealer and Shooter"], 1],
        ["What is a common Banker commission?",
         ["0%", "2%", "5%", "20%"], 2]
    ],

    threecard: [
        ["How many cards are in each hand?",
         ["2", "3", "5", "7"], 1],
        ["Which ranks higher in Three Card Poker?",
         ["Flush", "Straight", "Pair", "High Card"], 1],
        ["What must the dealer commonly have to qualify?",
         ["Ace-high", "King-high",
          "Queen-high or better", "A pair"], 2],
        ["How large is the Play wager?",
         ["Half the Ante", "Equal to the Ante",
          "Triple the Ante", "Any amount"], 1],
        ["Which is the highest three-card hand?",
         ["Pair", "Flush",
          "Three of a Kind", "Straight Flush"], 3]
    ]
};

// ==========================================
// QUIZ SCREENS
// ==========================================

function resetQuizDisplay() {
    quizIndex = 0;
    quizPoints = 0;
    quizAnswered = false;

    document.getElementById(
        "quiz-start-screen"
    ).hidden = false;

    document.getElementById(
        "quiz-question-screen"
    ).hidden = true;

    document.getElementById(
        "quiz-result-screen"
    ).hidden = true;
}

function startAcademyQuiz() {
    if (!currentGuide) return;

    quizIndex = 0;
    quizPoints = 0;
    quizAnswered = false;

    document.getElementById(
        "quiz-start-screen"
    ).hidden = true;

    document.getElementById(
        "quiz-result-screen"
    ).hidden = true;

    document.getElementById(
        "quiz-question-screen"
    ).hidden = false;

    displayQuizQuestion();
}

function displayQuizQuestion() {
    const questions = academyQuestions[currentGuide];
    const question = questions[quizIndex];

    quizAnswered = false;

    document.getElementById(
        "quiz-counter"
    ).textContent = "QUESTION " +
        (quizIndex + 1) + " OF " + questions.length;

    document.getElementById(
        "quiz-score"
    ).textContent = "⭐ SCORE: " + quizPoints;

    document.getElementById(
        "quiz-progress-fill"
    ).style.width =
        ((quizIndex + 1) / questions.length * 100) + "%";

    document.getElementById(
        "quiz-question"
    ).textContent = question[0];

    document.getElementById(
        "quiz-feedback"
    ).textContent = "";

    document.getElementById(
        "next-question"
    ).hidden = true;

    const answers = document.getElementById(
        "quiz-answers"
    );

    answers.innerHTML = "";

    question[1].forEach(function(answer, index) {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "quiz-answer";
        button.textContent =
            String.fromCharCode(65 + index) + ". " + answer;

        button.addEventListener("click", function() {
            checkQuizAnswer(index);
        });

        answers.appendChild(button);
    });
}

function checkQuizAnswer(selected) {
    if (quizAnswered) return;

    quizAnswered = true;

    const question =
        academyQuestions[currentGuide][quizIndex];

    const correct = question[2];

    document.querySelectorAll(
        ".quiz-answer"
    ).forEach(function(button, index) {
        button.disabled = true;

        if (index === correct) {
            button.classList.add("correct");
        }

        if (index === selected && selected !== correct) {
            button.classList.add("incorrect");
        }
    });

    const feedback = document.getElementById(
        "quiz-feedback"
    );

    if (selected === correct) {
        quizPoints++;
        feedback.textContent = "🎉 CORRECT! Great work!";
    }
    else {
        feedback.textContent =
            "📖 Not quite. Correct answer: " +
            question[1][correct];
    }

    document.getElementById(
        "quiz-score"
    ).textContent = "⭐ SCORE: " + quizPoints;

    const next = document.getElementById(
        "next-question"
    );

    next.hidden = false;

    next.textContent = quizIndex === 4
        ? "🏆 VIEW RESULTS"
        : "NEXT QUESTION →";
}

function nextAcademyQuestion() {
    if (!quizAnswered) return;

    quizIndex++;

    if (quizIndex >= 5) {
        finishAcademyQuiz();
    }
    else {
        displayQuizQuestion();
    }
}

function finishAcademyQuiz() {
    document.getElementById(
        "quiz-question-screen"
    ).hidden = true;

    document.getElementById(
        "quiz-result-screen"
    ).hidden = false;

    const passed = quizPoints >= 4;

    document.getElementById(
        "quiz-final-score"
    ).textContent = quizPoints + " / 5 CORRECT";

    document.getElementById(
        "quiz-result-icon"
    ).textContent = passed ? "🏆" : "📚";

    document.getElementById(
        "quiz-result-title"
    ).textContent = passed
        ? "ROYAL QUIZ PASSED!"
        : "KEEP LEARNING!";

    document.getElementById(
        "quiz-result-description"
    ).textContent = passed
        ? "👑 Excellent! You understand the fundamentals."
        : "Review the manual and try again. You need 4 of 5.";

    if (passed && !passedQuizzes.includes(currentGuide)) {
        passedQuizzes.push(currentGuide);
        saveAcademyProgress();
        updateAcademyProgress();
    }
}

// ==========================================
// CONNECT ALL PAGE BUTTONS
// ==========================================

document.querySelectorAll(
    ".guide-open-button"
).forEach(function(button) {
    button.addEventListener("click", function() {
        openGuide(button.dataset.game);
    });
});

document.getElementById(
    "game-search"
).addEventListener("input", filterAcademyGames);

document.querySelectorAll(
    ".filter-button"
).forEach(function(button) {
    button.addEventListener("click", function() {
        activeCategory = button.dataset.filter;

        document.querySelectorAll(
            ".filter-button"
        ).forEach(function(item) {
            const active = item === button;

            item.classList.toggle("active", active);
            item.setAttribute(
                "aria-pressed",
                String(active)
            );
        });

        filterAcademyGames();
    });
});

document.getElementById(
    "random-guide"
).addEventListener("click", function() {
    const random = Math.floor(
        Math.random() * academyGameIds.length
    );

    openGuide(academyGameIds[random]);
});

document.getElementById(
    "back-to-guides"
).addEventListener("click", showGuideLibrary);

document.getElementById(
    "another-guide"
).addEventListener("click", showGuideLibrary);

document.getElementById(
    "quiz-back-to-guides"
).addEventListener("click", showGuideLibrary);

document.getElementById(
    "complete-guide"
).addEventListener("click", function() {
    if (!currentGuide) return;

    if (!completedGuides.includes(currentGuide)) {
        completedGuides.push(currentGuide);
        saveAcademyProgress();
    }

    document.getElementById(
        "completion-message"
    ).textContent = "🏆 Guide completed!";

    updateAcademyProgress();
});

document.getElementById(
    "start-quiz"
).addEventListener("click", startAcademyQuiz);

document.getElementById(
    "next-question"
).addEventListener("click", nextAcademyQuestion);

document.getElementById(
    "retry-quiz"
).addEventListener("click", startAcademyQuiz);

// ==========================================
// INITIALIZE THE GUIDEBOOK
// ==========================================

updateAcademyProgress();
filterAcademyGames();

// Shared casino wallet, loaded from ../script.js.
loadProgress();
