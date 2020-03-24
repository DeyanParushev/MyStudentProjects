function solve() {
    let button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', (e) =>{
        let inputName = document.getElementsByTagName('input')[0].value;
        let nameToSort = inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();
        let inputIndex = nameToSort.charCodeAt(0) - 65;
        
        let listItems = document.getElementsByTagName('li');

        let itemsArray = Array.from(listItems);
        let firstLetters = itemsArray.map(x => x.innerHTML[0]);

        if(firstLetters[inputIndex] !== undefined){
            listItems[inputIndex].innerHTML += ', ' + nameToSort;
        }else{
            listItems[inputIndex].innerHTML = nameToSort;
        };

        document.getElementsByTagName('input')[0].value = '';
    });
};
