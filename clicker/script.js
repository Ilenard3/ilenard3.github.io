//Creating variables for our code
let linesOfCode = 0;

let clickPower = 1;
let upgradeCost = 50;

let interns = 0;
let internCost = 100;

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
        upgradeCost = upgradeCost * 1.5;
        updateScreen();
    }
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesOfCode + " lines of code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost;
}