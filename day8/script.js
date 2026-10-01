//Instead of creating a bunch of individual varaiables
//We cann put multiple pieces of daa in one place using arrays
//Arrays are created using 
const contents = [
    "Health Potion",
    "Sword",
    "Shield",
    "Magic Book",
    "Pet Lizard",
];

function loadInventory() {
    const listElement = document.getElementById("item-list");

    listElement.innerHTML = "";

    for(let i=0; i < contents.length; i++)
    {
        let currentItem = contents[i];

        let htmlToInject = "<li>" + currentItem + "</li>";

        //listElement = listElement.innerHTML + htmlToInject
        listElement.innerHTML += htmlToInject;
    }

    document.querySelector("buton").disabled = true;
    document.querySelector("buton").innerText = "Backpack Full";
}