function addItem() {
    let textToAdd = document.getElementById("newText").value;
    let newListItem = document.createElement('li');
    newListItem.textContent = textToAdd;

    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.innerText = '[Delete]';
    newListItem.innerHTML += deleteLink.outerHTML;
    document.getElementById("items").appendChild(newListItem);
    
    let itemsList = document.getElementById("items");
    itemsList.addEventListener('click', (e) => {
        if(e.target.innerText === '[Delete]'){
            let parent = e.target.parentNode;
            itemsList.removeChild(parent);
        };
    });
};
