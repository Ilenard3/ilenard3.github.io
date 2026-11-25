
// ==========================================
// NEON EMPIRE CASINO
// ROYAL CASINO GUIDEBOOK
// ==========================================

// Each game contains its own instruction manual.
// The guidebook does not change player credits.

// ==========================================
// CASINO GAME MANUALS
// ==========================================

const casinoGuides = {

    blackjack: {
        title: "Blackjack",
        icon: "🃏",
        description:
            "Learn to play one of the world's most famous casino card games.",

        sections: [
            {
                title: "01 | Game Overview",
                content: `
                    <p>
                        Blackjack is a card game where players
                        compete against the dealer.
                        The objective is to finish closer
                        to 21 than the dealer without
                        exceeding 21.
                    </p>
                    <p>
                        A standard game uses one or more
                        decks of 52 playing cards.
                    </p>
                `
            },
            {
                title: "02 | Card Values",
                content: `
                    <ul>
                        <li><strong>2 through 10:</strong>
                        Face value.</li>
                        <li><strong>Jack, Queen, King:</strong>
                        10 points each.</li>
                        <li><strong>Ace:</strong>
                        1 or 11 points, whichever is
                        more favorable without busting.</li>
                    </ul>

                    <div class="manual-example">
                        <h4>Example Hand</h4>
                        <p>
                            Ace + King = 21.
                            An Ace and a ten-value card
                            as the first two cards form
                            a natural blackjack.
                        </p>
                    </div>
                `
            },
            {
                title: "03 | How to Play",
                content: `
                    <ol>
                        <li>Place your wager before
                        cards are dealt.</li>
                        <li>You receive two cards.
                        The dealer also receives cards,
                        typically with one visible.</li>
                        <li>Choose to Hit, Stand, Double
                        Down, or Split when allowed.</li>
                        <li>The dealer plays according
                        to the table's fixed rules.</li>
                        <li>Compare hands to determine
                        the winner.</li>
                    </ol>
                `
            },
            {
                title: "04 | Player Decisions",
                content: `
                    <ul>
                        <li><strong>Hit:</strong>
                        Request another card.</li>
                        <li><strong>Stand:</strong>
                        Keep your current hand.</li>
                        <li><strong>Double Down:</strong>
                        Double your wager and receive
                        exactly one additional card.</li>
                        <li><strong>Split:</strong>
                        Divide an eligible pair into
                        two separate hands with
                        an additional wager.</li>
                        <li><strong>Surrender:</strong>
                        Where available, give up the
                        hand and recover half your bet.</li>
                    </ul>
                `
            },
            {
                title: "05 | Winning and Payouts",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr>
                                <th>Result</th>
                                <th>Typical Payout</th>
                            </tr>
                            <tr>
                                <td>Regular Win</td>
                                <td>1:1 profit</td>
                            </tr>
                            <tr>
                                <td>Natural Blackjack</td>
                                <td>3:2 at many tables</td>
                            </tr>
                            <tr>
                                <td>Push (Tie)</td>
                                <td>Wager returned</td>
                            </tr>
                            <tr>
                                <td>Loss or Bust</td>
                                <td>Wager lost</td>
                            </tr>
                        </table>
                    </div>

                    <p class="manual-note">
                        Some tables pay 6:5 for blackjack.
                        Dealer rules and other conditions vary.
                    </p>
                `
            },
            {
                title: "06 | Beginner Tips",
                content: `
                    <ul>
                        <li>Check whether the dealer
                        hits or stands on soft 17.</li>
                        <li>Learn basic strategy for
                        the specific table rules.</li>
                        <li>Never assume that 21
                        automatically beats a natural
                        blackjack.</li>
                        <li>No betting system can
                        guarantee a profit.</li>
                    </ul>
                `
            }
        ]
    },

    roulette: {
        title: "Roulette",
        icon: "🎡",
        description:
            "Discover the roulette wheel, betting layout, and common payouts.",

        sections: [
            {
                title: "01 | Game Overview",
                content: `
                    <p>
                        Roulette is a casino wheel game.
                        Players place bets on where a
                        small ball will land when the
                        spinning wheel comes to rest.
                    </p>
                    <p>
                        European roulette has 37 pockets:
                        numbers 1 through 36 and a single 0.
                        American roulette has 38 pockets,
                        adding a 00.
                    </p>
                `
            },
            {
                title: "02 | How to Play",
                content: `
                    <ol>
                        <li>Choose a roulette table.</li>
                        <li>Place chips on the numbers
                        or betting areas you prefer.</li>
                        <li>The dealer spins the wheel
                        and releases the ball.</li>
                        <li>Betting closes before
                        the ball settles.</li>
                        <li>The winning pocket
                        determines which bets pay.</li>
                    </ol>
                `
            },
            {
                title: "03 | Common Betting Options",
                content: `
                    <ul>
                        <li><strong>Straight Up:</strong>
                        One specific number.</li>
                        <li><strong>Split:</strong>
                        Two adjacent numbers.</li>
                        <li><strong>Street:</strong>
                        Three numbers in a row.</li>
                        <li><strong>Corner:</strong>
                        Four numbers.</li>
                        <li><strong>Red or Black:</strong>
                        Bet on a color.</li>
                        <li><strong>Odd or Even:</strong>
                        Bet on number parity.</li>
                        <li><strong>Dozen:</strong>
                        Bet on 1-12, 13-24, or 25-36.</li>
                    </ul>
                `
            },
            {
                title: "04 | Roulette Payouts",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr>
                                <th>Bet</th>
                                <th>Profit Payout</th>
                            </tr>
                            <tr><td>Straight Up</td><td>35:1</td></tr>
                            <tr><td>Split</td><td>17:1</td></tr>
                            <tr><td>Street</td><td>11:1</td></tr>
                            <tr><td>Corner</td><td>8:1</td></tr>
                            <tr><td>Dozen</td><td>2:1</td></tr>
                            <tr><td>Red / Black</td><td>1:1</td></tr>
                            <tr><td>Odd / Even</td><td>1:1</td></tr>
                        </table>
                    </div>

                    <p class="manual-note">
                        These are standard profit odds.
                        Winning bets also return the
                        original stake.
                    </p>
                `
            },
            {
                title: "05 | Example Round",
                content: `
                    <div class="manual-example">
                        <h4>Betting on Red</h4>
                        <p>
                            You place a 100-credit example
                            wager on red. If a red number
                            wins, the 1:1 payout gives
                            100 credits in profit plus
                            your original 100 credits.
                        </p>
                        <p>
                            If black or green wins,
                            the red bet loses under
                            standard rules.
                        </p>
                    </div>
                `
            },
            {
                title: "06 | Understanding the Odds",
                content: `
                    <p>
                        The zero pocket creates a
                        house advantage because it
                        is neither red nor black,
                        odd nor even.
                    </p>
                    <ul>
                        <li>European single-zero
                        roulette: approximately
                        2.70% house edge on
                        standard bets.</li>
                        <li>American double-zero
                        roulette: approximately
                        5.26% house edge on
                        standard bets.</li>
                    </ul>
                    <p>
                        Some European tables offer
                        special rules that reduce
                        the edge on certain bets.
                        Previous spins do not
                        predict future results.
                    </p>
                `
            }
        ]
    },

    poker: {
        title: "Texas Hold'em Poker",
        icon: "♠️",
        description:
            "Learn poker hands, community cards, betting rounds, and showdowns.",

        sections: [
            {
                title: "01 | Game Overview",
                content: `
                    <p>
                        Texas Hold'em is a popular
                        poker variation played against
                        other players, rather than
                        directly against the house
                        in its standard form.
                    </p>
                    <p>
                        Each player receives two
                        private cards. Five community
                        cards are dealt face up.
                        Players make the best possible
                        five-card poker hand.
                    </p>
                `
            },
            {
                title: "02 | Starting the Game",
                content: `
                    <ol>
                        <li>The dealer button identifies
                        the nominal dealer position.</li>
                        <li>Two players post the small
                        and big blinds.</li>
                        <li>Each player receives
                        two private cards.</li>
                        <li>The first betting
                        round begins.</li>
                    </ol>
                `
            },
            {
                title: "03 | The Four Betting Rounds",
                content: `
                    <ol>
                        <li><strong>Pre-Flop:</strong>
                        Players act after receiving
                        their two private cards.</li>
                        <li><strong>Flop:</strong>
                        Three community cards
                        are revealed.</li>
                        <li><strong>Turn:</strong>
                        A fourth community card
                        is revealed.</li>
                        <li><strong>River:</strong>
                        The fifth community card
                        is revealed.</li>
                    </ol>

                    <p>
                        If more than one player remains
                        after final betting, the hand
                        proceeds to a showdown.
                    </p>
                `
            },
            {
                title: "04 | Player Actions",
                content: `
                    <ul>
                        <li><strong>Check:</strong>
                        Pass the action when no
                        bet needs to be called.</li>
                        <li><strong>Bet:</strong>
                        Place the first wager
                        of a betting round.</li>
                        <li><strong>Call:</strong>
                        Match the required bet.</li>
                        <li><strong>Raise:</strong>
                        Increase the current bet.</li>
                        <li><strong>Fold:</strong>
                        Give up your hand.</li>
                        <li><strong>All-In:</strong>
                        Wager all remaining chips.</li>
                    </ul>
                `
            },
            {
                title: "05 | Poker Hand Rankings",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr>
                                <th>Rank</th>
                                <th>Hand</th>
                            </tr>
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
                title: "06 | Winning a Hand",
                content: `
                    <p>
                        A player can win when all
                        opponents fold or by holding
                        the best five-card hand
                        at showdown.
                    </p>

                    <div class="manual-example">
                        <h4>Example</h4>
                        <p>
                            Your private cards are
                            A♠ and K♠. The board
                            contains Q♠, J♠, 10♠,
                            3♦, and 2♣.
                        </p>
                        <p>
                            You have a royal flush,
                            the highest-ranking
                            poker hand.
                        </p>
                    </div>
                `
            },
            {
                title: "07 | Beginner Tips",
                content: `
                    <ul>
                        <li>Learn the hand rankings
                        before playing.</li>
                        <li>Understand how blinds
                        and betting rounds work.</li>
                        <li>Pay attention to your
                        position at the table.</li>
                        <li>A strong starting hand
                        does not guarantee victory.</li>
                        <li>Casino poker rooms
                        commonly collect a rake
                        or other fee.</li>
                    </ul>
                `
            }
        ]
    },

    craps: {
        title: "Craps",
        icon: "🎲",
        description:
            "Understand the come-out roll, point numbers, and dice bets.",

        sections: [
            {
                title: "01 | Game Overview",
                content: `
                    <p>
                        Craps is a casino dice game
                        played using two six-sided dice.
                        Players wager on the outcome
                        of the dice rolls.
                    </p>
                    <p>
                        The person rolling the dice
                        is called the shooter.
                    </p>
                `
            },
            {
                title: "02 | The Come-Out Roll",
                content: `
                    <p>
                        A new Pass Line round begins
                        with the come-out roll.
                    </p>

                    <ul>
                        <li><strong>7 or 11:</strong>
                        Pass Line wins.</li>
                        <li><strong>2, 3, or 12:</strong>
                        Pass Line loses.</li>
                        <li><strong>4, 5, 6, 8, 9, or 10:</strong>
                        That number becomes
                        the point.</li>
                    </ul>
                `
            },
            {
                title: "03 | The Point Phase",
                content: `
                    <p>
                        After a point is established,
                        the shooter continues rolling.
                    </p>

                    <ul>
                        <li>If the point appears
                        again before a 7,
                        Pass Line wins.</li>
                        <li>If a 7 appears before
                        the point, Pass Line loses.</li>
                        <li>Other totals do not
                        resolve the Pass Line bet.</li>
                    </ul>
                `
            },
            {
                title: "04 | Popular Bets",
                content: `
                    <ul>
                        <li><strong>Pass Line:</strong>
                        Bet with the shooter under
                        the standard point rules.</li>
                        <li><strong>Don't Pass:</strong>
                        Generally bets against the
                        shooter. A come-out 12
                        normally pushes.</li>
                        <li><strong>Come:</strong>
                        Similar to Pass Line,
                        but placed after a
                        point is established.</li>
                        <li><strong>Place Bets:</strong>
                        Wager on selected numbers
                        appearing before a 7.</li>
                        <li><strong>Odds Bets:</strong>
                        Additional bets behind
                        eligible line bets,
                        typically paid at true odds.</li>
                    </ul>
                `
            },
            {
                title: "05 | Payout Examples",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr>
                                <th>Bet</th>
                                <th>Profit Payout</th>
                            </tr>
                            <tr>
                                <td>Pass Line</td>
                                <td>1:1</td>
                            </tr>
                            <tr>
                                <td>Don't Pass</td>
                                <td>1:1</td>
                            </tr>
                            <tr>
                                <td>Place 6 or 8</td>
                                <td>7:6</td>
                            </tr>
                            <tr>
                                <td>Place 5 or 9</td>
                                <td>7:5</td>
                            </tr>
                            <tr>
                                <td>Place 4 or 10</td>
                                <td>9:5</td>
                            </tr>
                        </table>
                    </div>

                    <p class="manual-note">
                        Table minimums, permitted bet
                        amounts, and special rules vary.
                    </p>
                `
            },
            {
                title: "06 | Example Round",
                content: `
                    <div class="manual-example">
                        <h4>Pass Line Example</h4>
                        <p>
                            You place a 100-credit
                            example Pass Line wager.
                            The come-out roll is 6,
                            establishing a point of 6.
                        </p>
                        <p>
                            The shooter rolls 8,
                            then 5, then 6.
                            Because the point appears
                            before a 7, your bet wins
                            100 credits in profit.
                        </p>
                    </div>
                `
            },
            {
                title: "07 | Beginner Tips",
                content: `
                    <ul>
                        <li>Start by understanding
                        the Pass Line rules.</li>
                        <li>Learn the difference
                        between come-out and
                        point phases.</li>
                        <li>Check the table's
                        minimum bets and odds limits.</li>
                        <li>Every dice roll is
                        independent of earlier rolls.</li>
                    </ul>
                `
            }
        ]
    },

    baccarat: {
        title: "Baccarat",
        icon: "♦️",
        description:
            "Learn how Player and Banker hands compete to reach nine.",

        sections: [
            {
                title: "01 | Game Overview",
                content: `
                    <p>
                        Baccarat is a casino card
                        game where players usually
                        wager on which of two hands,
                        Player or Banker, will finish
                        closest to a total of nine.
                    </p>
                    <p>
                        This guide explains the
                        common Punto Banco version.
                    </p>
                `
            },
            {
                title: "02 | Card Values",
                content: `
                    <ul>
                        <li><strong>Ace:</strong>
                        1 point.</li>
                        <li><strong>2 through 9:</strong>
                        Face value.</li>
                        <li><strong>10, Jack, Queen, King:</strong>
                        0 points.</li>
                    </ul>

                    <p>
                        Only the last digit of the
                        total counts.
                    </p>

                    <div class="manual-example">
                        <h4>Example</h4>
                        <p>
                            A 7 and an 8 total 15,
                            which counts as 5
                            in Baccarat.
                        </p>
                    </div>
                `
            },
            {
                title: "03 | How to Play",
                content: `
                    <ol>
                        <li>Choose Player, Banker,
                        or Tie as your wager.</li>
                        <li>Two cards are dealt
                        to each hand.</li>
                        <li>Check for a natural
                        total of 8 or 9.</li>
                        <li>If needed, additional
                        cards are drawn according
                        to fixed rules.</li>
                        <li>The hand closest
                        to 9 wins.</li>
                    </ol>

                    <p>
                        Players do not choose
                        whether to hit or stand
                        in standard Punto Banco.
                    </p>
                `
            },
            {
                title: "04 | Common Payouts",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr>
                                <th>Bet</th>
                                <th>Typical Profit</th>
                            </tr>
                            <tr>
                                <td>Player</td>
                                <td>1:1</td>
                            </tr>
                            <tr>
                                <td>Banker</td>
                                <td>0.95:1 after 5% commission</td>
                            </tr>
                            <tr>
                                <td>Tie</td>
                                <td>8:1 at many tables</td>
                            </tr>
                        </table>
                    </div>

                    <p class="manual-note">
                        Some tables offer different
                        commission structures or
                        Tie payouts.
                    </p>
                `
            },
            {
                title: "05 | Example Round",
                content: `
                    <div class="manual-example">
                        <h4>Player Wins</h4>
                        <p>
                            The Player hand has 9,
                            while the Banker hand
                            has 6. The Player wins.
                        </p>
                        <p>
                            A winning 100-credit
                            example Player bet earns
                            100 credits in profit,
                            plus the returned stake.
                        </p>
                    </div>
                `
            },
            {
                title: "06 | Beginner Tips",
                content: `
                    <ul>
                        <li>Player and Banker are
                        names of hands, not
                        descriptions of who is
                        placing the bet.</li>
                        <li>Learn the fixed
                        drawing rules.</li>
                        <li>Check whether Banker
                        commission applies.</li>
                        <li>Understand that a
                        Tie bet typically has
                        a larger house edge.</li>
                        <li>Past results do not
                        determine future hands.</li>
                    </ul>
                `
            }
        ]
    },

    threecard: {
        title: "Three Card Poker",
        icon: "♥️",
        description:
            "Discover three-card rankings and how to challenge the dealer.",

        sections: [
            {
                title: "01 | Game Overview",
                content: `
                    <p>
                        Three Card Poker is a casino
                        table game where the player
                        and dealer each receive
                        three cards.
                    </p>
                    <p>
                        This guide focuses on
                        the common Ante and Play
                        version of the game.
                    </p>
                `
            },
            {
                title: "02 | How to Play",
                content: `
                    <ol>
                        <li>Place an Ante wager.</li>
                        <li>You and the dealer
                        each receive three cards.</li>
                        <li>Look at your cards.</li>
                        <li>Fold and lose your Ante,
                        or make a Play wager equal
                        to your Ante.</li>
                        <li>The dealer reveals
                        their cards.</li>
                        <li>Compare the hands
                        using the table rules.</li>
                    </ol>
                `
            },
            {
                title: "03 | Three Card Hand Rankings",
                content: `
                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr>
                                <th>Rank</th>
                                <th>Hand</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Straight Flush</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Three of a Kind</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Straight</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Flush</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Pair</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>High Card</td>
                            </tr>
                        </table>
                    </div>

                    <p>
                        Unlike five-card poker,
                        a straight ranks above
                        a flush in Three Card Poker.
                    </p>
                `
            },
            {
                title: "04 | Dealer Qualification",
                content: `
                    <p>
                        In a common Ante and Play
                        game, the dealer must hold
                        Queen-high or better
                        to qualify.
                    </p>

                    <ul>
                        <li>If the dealer does
                        not qualify, the Ante
                        pays 1:1 and the
                        Play wager pushes.</li>
                        <li>If the dealer qualifies
                        and your hand wins,
                        both Ante and Play
                        typically pay 1:1.</li>
                        <li>If the dealer qualifies
                        and your hand loses,
                        both wagers lose.</li>
                        <li>If the hands tie,
                        both wagers push.</li>
                    </ul>
                `
            },
            {
                title: "05 | Ante Bonus",
                content: `
                    <p>
                        Many tables pay an
                        additional Ante Bonus
                        for qualifying strong
                        player hands, regardless
                        of the dealer's hand.
                    </p>

                    <div class="manual-table-wrap">
                        <table class="manual-table">
                            <tr>
                                <th>Hand</th>
                                <th>Example Bonus</th>
                            </tr>
                            <tr>
                                <td>Straight Flush</td>
                                <td>5:1</td>
                            </tr>
                            <tr>
                                <td>Three of a Kind</td>
                                <td>4:1</td>
                            </tr>
                            <tr>
                                <td>Straight</td>
                                <td>1:1</td>
                            </tr>
                        </table>
                    </div>

                    <p class="manual-note">
                        Bonus schedules vary by casino.
                        Pair Plus is a separate
                        optional wager with its
                        own payout table.
                    </p>
                `
            },
            {
                title: "06 | Example Round",
                content: `
                    <div class="manual-example">
                        <h4>Winning Against the Dealer</h4>
                        <p>
                            You wager 100 example
                            credits on Ante and
                            another 100 on Play.
                        </p>
                        <p>
                            Your pair of Kings beats
                            a qualifying dealer
                            hand with a pair of Tens.
                        </p>
                        <p>
                            Both bets pay 1:1,
                            producing 200 credits
                            in total profit.
                        </p>
                    </div>
                `
            },
            {
                title: "07 | Beginner Tips",
                content: `
                    <ul>
                        <li>Memorize the special
                        three-card rankings.</li>
                        <li>Understand the
                        Queen-high dealer
                        qualification rule.</li>
                        <li>Read the Ante Bonus
                        schedule before playing.</li>
                        <li>Pair Plus and other
                        side bets have separate
                        rules and odds.</li>
                        <li>No hand or strategy
                        guarantees a win.</li>
                    </ul>
                `
            }
        ]
    }
};


// ==========================================
// FIND HTML ELEMENTS
// ==========================================

const gameLibrary = document.getElementById(
    "game-library"
);

const manualSection = document.getElementById(
    "manual-section"
);

const manualTitle = document.getElementById(
    "manual-title"
);

const manualIcon = document.getElementById(
    "manual-icon"
);

const manualDescription = document.getElementById(
    "manual-description"
);

const manualContent = document.getElementById(
    "manual-content"
);


// ==========================================
// OPEN A GAME MANUAL
// ==========================================

function openGuide(gameName) {

    const game = casinoGuides[gameName];

    if (!game) {
        return;
    }

    manualTitle.textContent = game.title;

    manualIcon.textContent = game.icon;

    manualDescription.textContent =
        game.description;

    // Clear the previously opened guide.
    manualContent.innerHTML = "";

    // Add each instruction section.
    for (let i = 0; i < game.sections.length; i++) {

        const section = game.sections[i];

        const panel = document.createElement(
            "article"
        );

        panel.className = "manual-panel";

        const heading = document.createElement(
            "h3"
        );

        heading.textContent = section.title;

        panel.appendChild(heading);

        // The HTML comes from our own fixed
        // game manual data, not user input.
        const information = document.createElement(
            "div"
        );

        information.innerHTML = section.content;

        panel.appendChild(information);

        manualContent.appendChild(panel);

    }

    // Hide the game selection menu.
    gameLibrary.hidden = true;

    // Display the selected manual.
    manualSection.hidden = false;

    // Move the visitor to the manual.
    manualSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ==========================================
// RETURN TO GAME LIBRARY
// ==========================================

function showGuideLibrary() {

    manualSection.hidden = true;

    gameLibrary.hidden = false;

    gameLibrary.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ==========================================
// SEARCH THE GAME LIBRARY
// ==========================================

function searchGuides() {

    const searchInput = document.getElementById(
        "game-search"
    );

    const searchText =
        searchInput.value.toLowerCase().trim();

    const gameCards = document.querySelectorAll(
        ".guide-game-card"
    );

    let visibleGames = 0;

    for (let i = 0; i < gameCards.length; i++) {

        const card = gameCards[i];

        const gameName = card.dataset.name;

        if (gameName.includes(searchText)) {

            card.hidden = false;

            visibleGames++;

        }
        else {

            card.hidden = true;

        }

    }

    document.getElementById(
        "search-count"
    ).textContent =
        "Showing " + visibleGames +
        " of 6 casino games.";

    document.getElementById(
        "no-results"
    ).hidden = visibleGames !== 0;

}


// ==========================================
// CONNECT BUTTONS
// ==========================================

const guideButtons = document.querySelectorAll(
    ".guide-open-button"
);

for (let i = 0; i < guideButtons.length; i++) {

    guideButtons[i].addEventListener(
        "click",
        function() {

            openGuide(this.dataset.game);

        }
    );

}

document.getElementById(
    "game-search"
).addEventListener(
    "input",
    searchGuides
);

document.getElementById(
    "back-to-guides"
).addEventListener(
    "click",
    showGuideLibrary
);

document.getElementById(
    "another-guide"
).addEventListener(
    "click",
    showGuideLibrary
);


// ==========================================
// LOAD THE SHARED CASINO BALANCE
// ==========================================

// This displays the player's existing credits.
// Reading the guidebook never places a wager.

loadProgress();
