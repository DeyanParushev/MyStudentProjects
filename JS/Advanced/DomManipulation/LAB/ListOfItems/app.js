function addItem() {
    let textToAdd = document.getElementById("newItemText").value;
    let newListItem = document.createElement('li');
    newListItem.innerHTML = textToAdd;

    document.getElementById("items").appendChild(newListItem);
    document.getElementById("newItemText").value = '';
};
