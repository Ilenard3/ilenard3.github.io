let accountBalance = 50;
const depositAmount = 10;

function depositAmount() {
    accountBalance = accountBalance + depositAmount;
    
    const accountText = document.getElementById("Account-display");
    const despositText = document.getElementById("desposit-message");

function withdrawAmount() {}
    accountBalance = accountBalance - depositAmount;
    
    const accountText = document.getElementById("Account-display");
    const despositText = document.getElementById("withdraw-message");

 if (accountBalance > 100) 
    {
        accountText.innerText  = accountBalance;
        statusText.innerText = "You are rich";
    }
    
    and ( accountBalance > 0 )
    {
        accountText.innerText  = accountBalance;
        statusText.innerText = "Good job";
    }
    else
    {
        accountText.innerText = 0;
        statusText.innerText = "No Money";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Dead";
    }
}