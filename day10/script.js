let currentLevel = 1;

function levelUp()
{
    currentLevel++;
    //currentLevel = currentLevel + 1;
    document.getElementById("level").innerHTML = currentLevel;
};

function saveLevel()
{
    localStorage.setItem("saveLevel", currentLevel);
    alert("level data saved!");
}

function loadLevel()
{
    let retrieveData = localStorage.getItem("savedLevel");

    if(retrieveData !== null)
    {
        currentLevel = retrieveData;
        document.getElementById("level").innerText = currentLevel;
    }
    else
    {
        alert("No save data found...");
    }
}