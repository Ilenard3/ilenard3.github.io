
//Creating variables for our code
let linesOfCode = 0;

let clickPower = 1;
let upgradeCost = 50;

let mouseCost = 200;

let interns = 0;
let internCost = 100;

let developers = 0;
let developerCost = 500;

function writeCode()
{
    linesOfCode = linesOfCode + clickPower;
    updateScreen();
}

function buyKeyboard()
{
    if(linesOfCode >= upgradeCost)
    {
        linesOfCode = linesOfCode - upgradeCost;
        clickPower = clickPower + 1;
        upgradeCost = Math.ceil(upgradeCost * 1.5);
        updateScreen();
    }
}

function buyMouse()
{
    if(linesOfCode >= mouseCost)
    {
        linesOfCode = linesOfCode - mouseCost;
        clickPower = clickPower + 5;
        mouseCost = Math.ceil(mouseCost * 1.5);
        updateScreen();
    }
}

function buyIntern()
{
    if(linesOfCode >= internCost)
    {
        linesOfCode = linesOfCode - internCost;
        interns = interns + 1;
        internCost = Math.ceil(internCost * 1.5);
        updateScreen();
    }
}

function buyDeveloper()
{
    if(linesOfCode >= developerCost)
    {
        linesOfCode = linesOfCode - developerCost;
        developers = developers + 1;
        developerCost = Math.ceil(developerCost * 1.5);
        updateScreen();
    }
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesOfCode + " lines of code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost;

    document.getElementById("mouse-cost-display").innerText = mouseCost;

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("cost-intern-display").innerText = internCost;

    document.getElementById("developer-display").innerText = developers;
    document.getElementById("developer-cost-display").innerText = developerCost;
}

setInterval(function() {
    if(interns > 0 || developers > 0)
    {
        linesOfCode = linesOfCode + interns + (developers * 5);
        updateScreen();
    }
},
1000
);
