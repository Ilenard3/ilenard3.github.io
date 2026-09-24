let accountBalance = 100;
const transactionAmount = 10;

function depositAmount() {
    accountBalance = accountBalance + transactionAmount;
    
    const accountText = document.getElementById("Account-display");
    const despositText = document.getElementById("desposit-message");

function withdrawAmount() 
    accountBalance = accountBalance - transactionAmount;
    
    const accountText = document.getElementById("Account-display");
    const despositText = document.getElementById("withdraw-message");

 if (accountBalance >= 100) {
        statusText.innerText = message || "You are rich";
        statusText.style.color = "";
    } else if (accountBalance > 0) {
        statusText.innerText = message "Good job";
        statusText.style.color = "";
    } else {
        accountBalance = 0;
        accountText.innerText = 0;
        statusText.innerText = "No Money";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";
}
}