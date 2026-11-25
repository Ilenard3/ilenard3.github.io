
// ==========================================
// NEON EMPIRE CASINO
// ROYAL GUIDEBOOK 2.0 UPGRADES
// ==========================================

// ==========================================
// ACADEMY PROGRESS
// ==========================================

const academyGameIds = [
    "blackjack",
    "roulette",
    "poker",
    "craps",
    "baccarat",
    "threecard"
];

let completedGuides = [];
let passedQuizzes = [];
let currentGuide = null;

function readAcademyProgress(key) {

    try {
        const saved = JSON.parse(
            localStorage.getItem(key) || "[]"
        );

        if (!Array.isArray(saved)) {
            return [];
        }

        return saved.filter(function(id) {
            return academyGameIds.includes(id);
        });

    }
    catch (error) {
        return [];
    }
}

completedGuides = readAcademyProgress(
    "neonAcademyGuides"
);

passedQuizzes = readAcademyProgress(
    "neonAcademyQuizzes"
);

function updateAcademyProgress() {

    const completed = new Set(completedGuides);
    const passed = new Set(passedQuizzes);

    const count = completed.size;
    const percent = Math.round(count / 6 * 100);

    document.getElementById(
        "guides-completed"
    ).textContent = count + " / 6";

    document.getElementById(
        "quizzes-passed"
    ).textContent = passed.size + " / 6";

    document.getElementById(
        "progress-percent"
    ).textContent = percent + "%";

    document.getElementById(
        "progress-fill"
    ).style.width = percent + "%";

    document.getElementById(
        "academy-progress"
    ).setAttribute(
        "aria-valuenow",
        percent
    );

    let rank = "ROOKIE";

    if (count >= 2) {
        rank = "STUDENT";
    }

    if (count >= 4) {
        rank = "EXPERT";
    }

    if (count === 6 && passed.size === 6) {
        rank = "ROYAL MASTER";
    }

    document.getElementById(
        "academy-rank"
    ).textContent = rank;

    let message =
        "📖 Your royal casino education starts here!";

    if (count > 0) {
        message =
            "⭐ Great progress! " + count +
            " of 6 guides completed.";
    }

    if (count === 6) {
        message =
            "👑 All guides completed! Try passing every quiz.";
    }

    if (count === 6 && passed.size === 6) {
        message =
            "🏆 ROYAL MASTER! You've completed the academy!";
    }

    document.getElementById(
        "progress-message"
    ).textContent = message;

    document.querySelectorAll(
        ".guide-completion"
    ).forEach(function(label) {

        const id = label.dataset.completion;

        if (completed.has(id)) {
            label.textContent = "✅ GUIDE COMPLETED";
            label.classList.add("completed");
        }
        else {
            label.textContent = "📖 Not Yet Completed";
            label.classList.remove("completed");
        }

    });
}


// ==========================================
// MARK A MANUAL AS COMPLETED
// ==========================================

document.getElementById(
    "complete-guide"
).addEventListener("click", function() {

    if (!currentGuide) {
        return;
    }

    if (!completedGuides.includes(currentGuide)) {

        completedGuides.push(currentGuide);

        localStorage.setItem(
            "neonAcademyGuides",
            JSON.stringify(completedGuides)
        );

    }

    document.getElementById(
        "completion-message"
    ).textContent =
        "🏆 Excellent! This manual is now completed.";

    updateAcademyProgress();

});


// ==========================================
// UPGRADED MANUAL OPENING
// ==========================================

// Preserve the original manual display function.
const originalOpenGuide = openGuide;

openGuide = function(gameName) {

    if (!casinoGuides[gameName]) {
        return;
    }

    currentGuide = gameName;

    // Display the original complete manual.
    originalOpenGuide(gameName);

    // Build the table of contents.
    const toc = document.getElementById(
        "manual-toc-links"
    );

    toc.innerHTML = "";

    const panels = document.querySelectorAll(
        "#manual-content .manual-panel"
    );

    panels.forEach(function(panel, index) {

        panel.id = "manual-topic-" + index;

        const heading = panel.querySelector("h3");

        const button = document.createElement("button");

        button.type = "button";

        button.textContent = heading.textContent;

        button.addEventListener("click", function() {

            panel.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });

        });

        toc.appendChild(button);

    });

    const alreadyCompleted =
        completedGuides.includes(gameName);

    document.getElementById(
        "completion-message"
    ).textContent = alreadyCompleted
        ? "✅ You've already completed this manual!"
        : "";

    resetQuizDisplay();

};


// ==========================================
// SEARCH AND CATEGORY FILTERS
// ==========================================

let activeCategory = "all";

function filterAcademyGames() {

    const searchText = document.getElementById(
        "game-search"
    ).value.toLowerCase().trim();

    const cards = document.querySelectorAll(
        ".guide-game-card"
    );

    let visibleCount = 0;

    cards.forEach(function(card) {

        const matchesSearch =
            card.dataset.name.includes(searchText);

        const matchesCategory =
            activeCategory === "all" ||
            card.dataset.category === activeCategory;

        const visible =
            matchesSearch && matchesCategory;

        card.hidden = !visible;

        if (visible) {
            visibleCount++;
        }

    });

    document.getElementById(
        "search-count"
    ).textContent =
        "Showing " + visibleCount +
        " of 6 casino games.";

    document.getElementById(
        "no-results"
    ).hidden = visibleCount !== 0;

}

// Replace the old search behavior with the
// new combined search and category filtering.
searchGuides = filterAcademyGames;

document.getElementById(
    "game-search"
).addEventListener(
    "input",
    filterAcademyGames
);

document.querySelectorAll(
    ".filter-button"
).forEach(function(button) {

    button.addEventListener("click", function() {

        activeCategory = button.dataset.filter;

        document.querySelectorAll(
            ".filter-button"
        ).forEach(function(item) {

            const selected = item === button;

            item.classList.toggle(
                "active",
                selected
            );

            item.setAttribute(
                "aria-pressed",
                String(selected)
            );

        });

        filterAcademyGames();

    });

});


// ==========================================
// RANDOM GAME GUIDE
// ==========================================

document.getElementById(
    "random-guide"
).addEventListener("click", function() {

    const randomIndex = Math.floor(
        Math.random() * academyGameIds.length
    );

    openGuide(academyGameIds[randomIndex]);

});


// ==========================================
// ROYAL KNOWLEDGE QUIZ QUESTIONS
// ==========================================

// Every game has five questions.
// The correct answer is stored by its index.

const academyQuestions = {

    blackjack: [
        {
            question: "🎯 What is the main goal of Blackjack?",
            answers: [
                "Reach exactly 30",
                "Beat the dealer without exceeding 21",
                "Collect four matching cards",
                "Get the highest single card"
            ],
            correct: 1,
            explanation:
                "Blackjack is about beating the dealer without going over 21."
        },
        {
            question: "🃏 How many points is a King worth?",
            answers: ["5", "10", "11", "13"],
            correct: 1,
            explanation:
                "Kings, Queens, and Jacks are worth 10 points."
        },
        {
            question: "♠ What does Hit mean?",
            answers: [
                "Request another card",
                "End your turn",
                "Double your wager",
                "Give up your hand"
            ],
            correct: 0,
            explanation:
                "Hit means requesting another card."
        },
        {
            question: "👑 What is a natural Blackjack?",
            answers: [
                "Three cards totaling 21",
                "Any hand totaling 20",
                "An Ace and a ten-value card as the first two cards",
                "Two Aces"
            ],
            correct: 2,
            explanation:
                "A natural Blackjack is a two-card total of 21."
        },
        {
            question: "💰 What happens on a normal push?",
            answers: [
                "You double your money",
                "The dealer takes half",
                "Your wager is returned",
                "You receive another card"
            ],
            correct: 2,
            explanation:
                "A push is a tie, so the original wager is returned."
        }
    ],

    roulette: [
        {
            question: "🎡 How many pockets are on a European wheel?",
            answers: ["36", "37", "38", "40"],
            correct: 1,
            explanation:
                "European roulette has numbers 1-36 plus a single zero."
        },
        {
            question: "🔴 What is the standard profit payout for red?",
            answers: ["1:1", "2:1", "5:1", "35:1"],
            correct: 0,
            explanation:
                "Red and black bets normally pay 1:1."
        },
        {
            question: "🎯 What does a straight-up bet cover?",
            answers: [
                "Two numbers",
                "Four numbers",
                "One number",
                "Twelve numbers"
            ],
            correct: 2,
            explanation:
                "A straight-up bet covers one specific number."
        },
        {
            question: "🟢 What color is the zero pocket?",
            answers: ["Red", "Black", "Blue", "Green"],
            correct: 3,
            explanation:
                "Zero pockets are green."
        },
        {
            question: "💰 What is the standard straight-up profit payout?",
            answers: ["1:1", "8:1", "17:1", "35:1"],
            correct: 3,
            explanation:
                "A winning straight-up bet normally pays 35:1 profit."
        }
    ],

    poker: [
        {
            question: "♠ How many private cards does each player get?",
            answers: ["2", "3", "4", "5"],
            correct: 0,
            explanation:
                "Texas Hold'em players receive two private cards."
        },
        {
            question: "🃏 How many community cards are eventually dealt?",
            answers: ["2", "3", "4", "5"],
            correct: 3,
            explanation:
                "Five community cards appear by the river."
        },
        {
            question: "🏆 Which is the highest-ranked poker hand?",
            answers: [
                "Full House",
                "Royal Flush",
                "Straight",
                "Two Pair"
            ],
            correct: 1,
            explanation:
                "A Royal Flush is the highest-ranked standard poker hand."
        },
        {
            question: "🎲 What is the Flop?",
            answers: [
                "The final card",
                "The first three community cards",
                "A player's private cards",
                "The dealer button"
            ],
            correct: 1,
            explanation:
                "The Flop reveals three community cards."
        },
        {
            question: "💰 What does Fold mean?",
            answers: [
                "Match a bet",
                "Increase a bet",
                "Give up your hand",
                "Win automatically"
            ],
            correct: 2,
            explanation:
                "Folding means giving up your hand."
        }
    ],

    craps: [
        {
            question: "🎲 How many dice are used in Craps?",
            answers: ["1", "2", "3", "4"],
            correct: 1,
            explanation:
                "Craps uses two six-sided dice."
        },
        {
            question: "⭐ Which come-out roll wins a Pass Line bet?",
            answers: ["2", "3", "7", "12"],
            correct: 2,
            explanation:
                "A come-out 7 or 11 wins a Pass Line bet."
        },
        {
            question: "🎯 Which number can become a point?",
            answers: ["2", "3", "6", "11"],
            correct: 2,
            explanation:
                "Possible points are 4, 5, 6, 8, 9, and 10."
        },
        {
            question: "💰 What is a Pass Line win paid at?",
            answers: ["1:1", "2:1", "5:1", "10:1"],
            correct: 0,
            explanation:
                "A Pass Line win pays even money."
        },
        {
            question: "🎲 What happens if a 7 appears before the point?",
            answers: [
                "Pass Line wins",
                "Pass Line loses",
                "The point doubles",
                "Nothing happens"
            ],
            correct: 1,
            explanation:
                "Rolling 7 before repeating the point loses the Pass Line bet."
        }
    ],

    baccarat: [
        {
            question: "♦️ What is the target number in Baccarat?",
            answers: ["7", "9", "11", "21"],
            correct: 1,
            explanation:
                "The goal is to finish closest to nine."
        },
        {
            question: "🃏 How much is a Queen worth?",
            answers: ["0", "1", "10", "12"],
            correct: 0,
            explanation:
                "Face cards and tens are worth zero."
        },
        {
            question: "🎯 What does a total of 15 count as?",
            answers: ["15", "10", "5", "1"],
            correct: 2,
            explanation:
                "Only the last digit counts, so 15 becomes 5."
        },
        {
            question: "👑 Which are the two main hands?",
            answers: [
                "Red and Black",
                "Player and Banker",
                "King and Queen",
                "Dealer and Shooter"
            ],
            correct: 1,
            explanation:
                "The two hands are called Player and Banker."
        },
        {
            question: "💰 What commission is common on winning Banker bets?",
            answers: ["0%", "2%", "5%", "20%"],
            correct: 2,
            explanation:
                "Traditional commission Baccarat often charges 5%."
        }
    ],

    threecard: [
        {
            question: "♥️ How many cards does each hand receive?",
            answers: ["2", "3", "5", "7"],
            correct: 1,
            explanation:
                "Each hand contains three cards."
        },
        {
            question: "♠ Which hand ranks higher in Three Card Poker?",
            answers: [
                "Flush",
                "Straight",
                "Pair",
                "High Card"
            ],
            correct: 1,
            explanation:
                "A Straight ranks above a Flush in Three Card Poker."
        },
        {
            question: "👑 What does the dealer commonly need to qualify?",
            answers: [
                "Ace-high",
                "King-high",
                "Queen-high or better",
                "A pair"
            ],
            correct: 2,
            explanation:
                "The dealer normally needs Queen-high or better."
        },
        {
            question: "💰 What is the Play wager compared with the Ante?",
            answers: [
                "Half the Ante",
                "Equal to the Ante",
                "Triple the Ante",
                "Always optional in amount"
            ],
            correct: 1,
            explanation:
                "The Play wager equals the Ante in standard Ante and Play."
        },
        {
            question: "🏆 Which is the highest Three Card Poker hand?",
            answers: [
                "Pair",
                "Flush",
                "Three of a Kind",
                "Straight Flush"
            ],
            correct: 3,
            explanation:
                "A Straight Flush is the highest three-card hand."
        }
    ]

};


// ==========================================
// QUIZ VARIABLES
// ==========================================

let quizIndex = 0;
let quizPoints = 0;
let quizAnswered = false;

const quizStartScreen = document.getElementById(
    "quiz-start-screen"
);

const quizQuestionScreen = document.getElementById(
    "quiz-question-screen"
);

const quizResultScreen = document.getElementById(
    "quiz-result-screen"
);


// ==========================================
// RESET QUIZ DISPLAY
// ==========================================

function resetQuizDisplay() {

    quizIndex = 0;
    quizPoints = 0;
    quizAnswered = false;

    quizStartScreen.hidden = false;
    quizQuestionScreen.hidden = true;
    quizResultScreen.hidden = true;

}


// ==========================================
// START A KNOWLEDGE QUIZ
// ==========================================

function startAcademyQuiz() {

    if (!currentGuide) {
        return;
    }

    quizIndex = 0;
    quizPoints = 0;
    quizAnswered = false;

    quizStartScreen.hidden = true;
    quizResultScreen.hidden = true;
    quizQuestionScreen.hidden = false;

    displayQuizQuestion();

}


// ==========================================
// DISPLAY A QUESTION
// ==========================================

function displayQuizQuestion() {

    const questions = academyQuestions[currentGuide];

    const question = questions[quizIndex];

    quizAnswered = false;

    document.getElementById(
        "quiz-counter"
    ).textContent =
        "QUESTION " + (quizIndex + 1) + " OF 5";

    document.getElementById(
        "quiz-score"
    ).textContent =
        "⭐ SCORE: " + quizPoints;

    document.getElementById(
        "quiz-progress-fill"
    ).style.width =
        ((quizIndex + 1) / questions.length * 100) + "%";

    document.getElementById(
        "quiz-question"
    ).textContent = question.question;

    document.getElementById(
        "quiz-feedback"
    ).textContent = "";

    document.getElementById(
        "next-question"
    ).hidden = true;

    const answersContainer = document.getElementById(
        "quiz-answers"
    );

    answersContainer.innerHTML = "";

    question.answers.forEach(function(answer, index) {

        const button = document.createElement("button");

        button.type = "button";
        button.className = "quiz-answer";

        button.textContent =
            String.fromCharCode(65 + index) +
            ". " + answer;

        button.addEventListener("click", function() {

            checkQuizAnswer(index);

        });

        answersContainer.appendChild(button);

    });

}


// ==========================================
// CHECK THE SELECTED ANSWER
// ==========================================

function checkQuizAnswer(selectedIndex) {

    if (quizAnswered) {
        return;
    }

    quizAnswered = true;

    const question =
        academyQuestions[currentGuide][quizIndex];

    const correctIndex = question.correct;

    const buttons = document.querySelectorAll(
        ".quiz-answer"
    );

    buttons.forEach(function(button, index) {

        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

        if (
            index === selectedIndex &&
            index !== correctIndex
        ) {
            button.classList.add("incorrect");
        }

    });

    const feedback = document.getElementById(
        "quiz-feedback"
    );

    if (selectedIndex === correctIndex) {

        quizPoints++;

        feedback.textContent =
            "🎉 CORRECT! " + question.explanation;

    }
    else {

        feedback.textContent =
            "📖 NOT QUITE! " + question.explanation;

    }

    document.getElementById(
        "quiz-score"
    ).textContent =
        "⭐ SCORE: " + quizPoints;

    const nextButton = document.getElementById(
        "next-question"
    );

    nextButton.hidden = false;

    if (quizIndex === 4) {
        nextButton.textContent = "🏆 VIEW RESULTS";
    }
    else {
        nextButton.textContent = "NEXT QUESTION →";
    }

}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextAcademyQuestion() {

    if (!quizAnswered) {
        return;
    }

    quizIndex++;

    if (quizIndex >= 5) {
        finishAcademyQuiz();
    }
    else {
        displayQuizQuestion();
    }

}


// ==========================================
// FINISH THE QUIZ
// ==========================================

function finishAcademyQuiz() {

    quizQuestionScreen.hidden = true;
    quizResultScreen.hidden = false;

    const passed = quizPoints >= 4;

    document.getElementById(
        "quiz-final-score"
    ).textContent =
        quizPoints + " / 5 CORRECT";

    if (passed) {

        document.getElementById(
            "quiz-result-icon"
        ).textContent = "🏆";

        document.getElementById(
            "quiz-result-title"
        ).textContent = "ROYAL QUIZ PASSED!";

        document.getElementById(
            "quiz-result-description"
        ).textContent =
            "👑 Excellent work! You understand the " +
            casinoGuides[currentGuide].title +
            " fundamentals.";

        if (!passedQuizzes.includes(currentGuide)) {

            passedQuizzes.push(currentGuide);

            localStorage.setItem(
                "neonAcademyQuizzes",
                JSON.stringify(passedQuizzes)
            );

        }

        updateAcademyProgress();

    }
    else {

        document.getElementById(
            "quiz-result-icon"
        ).textContent = "📚";

        document.getElementById(
            "quiz-result-title"
        ).textContent = "KEEP LEARNING!";

        document.getElementById(
            "quiz-result-description"
        ).textContent =
            "You need at least 4 out of 5 to pass. " +
            "Review the manual and try again!";

    }

}


// ==========================================
// CONNECT QUIZ BUTTONS
// ==========================================

document.getElementById(
    "start-quiz"
).addEventListener(
    "click",
    startAcademyQuiz
);

document.getElementById(
    "next-question"
).addEventListener(
    "click",
    nextAcademyQuestion
);

document.getElementById(
    "retry-quiz"
).addEventListener(
    "click",
    startAcademyQuiz
);

document.getElementById(
    "quiz-back-to-guides"
).addEventListener(
    "click",
    showGuideLibrary
);


// ==========================================
// LOAD ACADEMY PROGRESS
// ==========================================

updateAcademyProgress();
