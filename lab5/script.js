let accountBalance = 100;
const depositAmount = 10;
const withdrawAmount = 10;

function depositAmount() {
    accountBalance = accountBalance + depositAmount;
    
    const accountText = document.getElementById("Account-display");
    const despositText = document.getElementById("desposit-message");

function withdrawAmount() 
    accountBalance = accountBalance - withdrawAmount;
    
    const accountText = document.getElementById("Account-display");
    const despositText = document.getElementById("withdraw-message");

 if (accountBalance > 100) 
    {
        accountText.innerText  = accountBalance;
        statusText.innerText = "You are rich";
    }
    
    and (100 < accountBalance > 0 )
    {
         accountText.innerText  = accountBalance;
        statusText.innerText = "Good job";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "No Money";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Dead";
    }
}