let accountBalance = 0;
const depositAmount = 10;

function depositAmount() {
    accountBalance = accountBalance + depositAmount;
    
    const accountText = document.getElementById("Account-display");
    const despositText = document.getElementById("desposit-message");

    if (accountBalance > 0) 
    {
        healthText.innerText  = playerHealth;
        statusText.innerText = "You've been hit!";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "Game Over!";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Dead";
    }
}

