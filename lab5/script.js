let accountBalance = 100;
const transactionAmount = 10;

function depositAmount() {
    accountBalance = accountBalance + transactionAmount;
    
    const accountText = document.getElementById("Account-display");
    const statusText = document.getElementById("desposit-message");

    accountText.innerText = accountBalance;

    if (accountBalance >= 100) {
        statusText.innerText = "You are rich";
    } else if (accountBalance > 0) {
        statusText.innerText = "Good job";
    }
}

function withdrawAmount() {
    accountBalance = accountBalance - transactionAmount;
    
    const accountText = document.getElementById("Account-display");
    const statusText = document.getElementById("desposit-message");

    if (accountBalance >= 100) {
        accountText.innerText = accountBalance;
        statusText.innerText = "You are rich";
    } else if (accountBalance > 0) {
        accountText.innerText = accountBalance;
        statusText.innerText = "Good job";
    } else {
        accountBalance = 0;
        accountText.innerText = 0;
        statusText.innerText = "No Money";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";
    }
}