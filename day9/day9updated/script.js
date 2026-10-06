const addButton = document.getElementById("addButton");
const bagItem = document.getElementById("bagItem");
const gameDayList = document.getElementById("gameDayList");


addButton.addEventListener("click", addItem);


bagItem.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});


function addItem() {
    const itemText = bagItem.value.trim();

    if (itemText === "") {
        return;
    }

    const listItem = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const icon = document.createElement("span");
    icon.className = "item-icon";
    icon.textContent = "🏈";

    const itemName = document.createElement("span");
    itemName.className = "item-name";
    itemName.textContent = itemText;

    const chicken = document.createElement("span");
    chicken.className = "chicken";
    chicken.textContent = "🐓";

    listItem.appendChild(checkBox);
    listItem.appendChild(icon);
    listItem.appendChild(itemName);
    listItem.appendChild(chicken);

    gameDayList.appendChild(listItem);

    addCheckboxEvent(checkBox);

    bagItem.value = "";
    bagItem.focus();
}


function addCheckboxEvent(checkBox) {
    checkBox.addEventListener("change", function() {

        const listItem = checkBox.parentElement;

        if (checkBox.checked) {
            listItem.classList.add("checked");
        } else {
            listItem.classList.remove("checked");
        }

    });
}


const checkBoxes = document.querySelectorAll(
    '#gameDayList input[type="checkbox"]'
);

checkBoxes.forEach(function(checkBox) {
    addCheckboxEvent(checkBox);
});