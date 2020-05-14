function attachEvents() {
    let loadButton = document.querySelector('button.load');
    let addButton = document.querySelector('button.add');

    loadButton.addEventListener('click', async () => { load() })
    addButton.addEventListener('click', async (event) => {
        let newCatch = getDataFromParentNode(event.target);
        clearInputForm();
        await fetch(`https://fisher-game.firebaseio.com/catches.json`, {
            method: 'post',
            body: JSON.stringify(newCatch)
        });
    });
};

attachEvents();

function createHTMLFromObject(id, object) {
    let div = document.createElement('div');
    div.className = 'catch';
    div.id = id;

    appendHTMLElements('text', 'Angler', 'angler', object.angler, div);
    appendHTMLElements('number', 'Weight', 'weight', object.weight, div);
    appendHTMLElements('text', 'Species', 'species', object.species, div);
    appendHTMLElements('text', 'Location', 'location', object.location, div);
    appendHTMLElements('text', 'Bait', 'bait', object.bait, div);
    appendHTMLElements('number', 'Capture Time', 'captureTime', object.captureTime, div);

    let updateButton = document.createElement('button');
    updateButton.className = 'update';
    updateButton.textContent = 'Update';
    updateButton.addEventListener('click', async (event) => {
        let updatedCatch = getDataFromParentNode(event.target);
        let targetKey = event.target.parentNode.id;
        await fetch(`https://fisher-game.firebaseio.com/catches/${targetKey}.json`, {
            method: 'put',
            body: JSON.stringify(updatedCatch),
        });

        await load();
    });
    div.appendChild(updateButton);

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', async (event) => {
        let targetKey = event.target.parentNode.id;
        await fetch(`https://fisher-game.firebaseio.com/catches/${targetKey}.json`,{
            method:'delete',
        });
        await load();
    });
    div.appendChild(deleteButton);

    return div;
};

function appendHTMLElements(type, labelText, elementClass, value, elementToAppendTo) {
    let label = document.createElement('label');
    label.textContent = labelText;
    elementToAppendTo.appendChild(label);

    let inputElement = document.createElement('input');
    inputElement.type = type;
    inputElement.className = elementClass;
    inputElement.value = value;
    elementToAppendTo.appendChild(inputElement);

    elementToAppendTo.appendChild(document.createElement('hr'));
};

async function load() {
    let catchesRef = document.querySelector('#catches');

    while (catchesRef.children.length > 1) {
        catchesRef.removeChild(catchesRef.children[1]);
    };

    let loadResponse = await fetch(`https://fisher-game.firebaseio.com/catches.json`);
    let parsedLoadResponse = await loadResponse.json();
    Array.from(Object.entries(parsedLoadResponse)).forEach(event => {
        catchesRef.appendChild(createHTMLFromObject(event[0], event[1]));
    });
};

function clearInputForm() {
    document.querySelector('aside fieldset input.angler').value = '';
    document.querySelector('aside fieldset input.weight').value = '';
    document.querySelector('aside fieldset input.species').value = '';
    document.querySelector('aside fieldset input.location').value = '';
    document.querySelector('aside fieldset input.bait').value = '';
    document.querySelector('aside fieldset input.captureTime').value = '';
};

function getDataFromParentNode(event) {
    let newCatch = {};
    newCatch.angler = event.parentNode.querySelector('input.angler').value;
    newCatch.weight = event.parentNode.querySelector('input.weight').value;
    newCatch.species = event.parentNode.querySelector('input.species').value;
    newCatch.location = event.parentNode.querySelector('input.location').value;
    newCatch.bait = event.parentNode.querySelector('input.bait').value;
    newCatch.captureTime = event.parentNode.querySelector('input.captureTime').value;

    return newCatch;
};
