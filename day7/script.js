let playerHealth = 100;
const damageAmount = 30;

function takeDamage() {
    playerHealth = playerHealth - damageAmount;
    const healthText = document.getElementById("health-display")''
    const statusText = document.getElementById("status-message");

    healthText.innerText  = playerHealth;
}