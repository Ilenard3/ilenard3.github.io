let accountBalance = 0;
const depositAmount = 10;
const withdrawAmount = 10;

function depositAmount() {
    accountBalance = accountBalance + depositAmount;
    
    const accountText = document.getElementById("Account-display");
    const despositText = document.getElementById("desposit-message");
}
function withdrawAmount() {
    accountBalance = accountBalance - withdrawAmount;
    
    const accountText = document.getElementById("Account-display");
    const despositText = document.getElementById("withdraw-message");
}