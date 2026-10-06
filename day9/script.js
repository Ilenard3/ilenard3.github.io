const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addItem);

function addItem() {
    const item = document.getElementById("bagItem").value;

    if (item != "") {
        const listItem = document.createElement("li");
        const checkBox = document.createElement("input");

        checkBox.type = "checkbox";

        listItem.appendChild(checkBox);
        listItem.appendChild(document.createTextNode(item));

        document.getElementById("gameDayList").appendChild(listItem);

        document.getElementById("bagItem").value = "";
    }
}