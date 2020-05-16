import { loadElements } from './firebaseRequest.js';
import { createElement } from './firebaseRequest.js';
import { editElement } from './firebaseRequest.js';
import { deleteElement } from './firebaseRequest.js';

appendErrorDiv();

document.querySelector('#loadBooks').addEventListener('click', async () => {
    clearForm();
    let books = await loadElements();
    displayAllBooks(books);
});

//displays all the books from the data base
function displayAllBooks(books) {
    document.querySelector('tbody').innerHTML = '';

    Object.entries(books).forEach(e => {
        let newTableRow = createHTMLElement(e[1], e[0]);
        document.querySelector('tbody').appendChild(newTableRow);
    });
};

document.querySelector('form button').addEventListener('click', async (e) => {
    e.preventDefault();
    let bookObject = getDataFromForm();

    if (bookObject.author !== '' && bookObject.isbn !== '' && bookObject.title !== '') {
        if (await thereIsARepetition(bookObject.isbn) === false) {
            let newHTMLElement = createHTMLElement(bookObject);
            document.querySelector('tbody').appendChild(newHTMLElement);
            let newBookKey = await createElement(bookObject);
            newHTMLElement.id = Object.values(newBookKey)[0];

            document.querySelector('#error').style.display = 'none';
        } else {
            document.querySelector('#error').style.display = 'block';
        };
    } else {
        document.querySelector('#error').style.display = 'block';
    };
});

//checks if there is already a book with the same isbn in the data base
async function thereIsARepetition(isbn) {
    let books = await loadElements();
    if (books !== null) {
        if (Object.values(books).find(x => x.isbn === isbn)) {
            return true;
        } else {
            return false;
        };
    } else {
        return false;
    };
};

// creates a new html element given an object and id
function createHTMLElement(bookObject, id) {
    let tableRow = document.createElement('tr');
    tableRow.id = id;
    tableRow.innerHTML = `<td>${bookObject.title}</td>
    <td>${bookObject.author}</td>
    <td>${bookObject.isbn}</td>
    <td>
        <button>Edit</button>
        <button>Delete</button>
    </td>`

    tableRow.addEventListener('click', (e) => {
        if (e.target.tagName === 'TD') {
            fillInForm(tableRow);
        };
    });
    attachButtons(tableRow);
    return tableRow;
};

//attaches the edit and delete button to the new html element
function attachButtons(htmlElement) {
    let buttons = htmlElement.querySelectorAll('button');
    buttons[0].addEventListener('click', async (e) => {
        let book = getDataFromForm();

        let htmlInfo = {
            title: htmlElement.children[0].textContent,
            author: htmlElement.children[1].textContent,
            isbn: htmlElement.children[2].textContent,
        };
        
        if (book.author !== '' && book.isbn !== '' && book.title !== '') {
            if (book.author !== htmlInfo.author || book.title !== htmlInfo.title || book.isbn !== htmlInfo.isbn && await thereIsARepetition(book.isbn) === false) {
                clearForm();
                await editElement(book, htmlElement.id);
                let books = await loadElements();
                displayAllBooks(books);

                document.querySelector('#error').style.display = 'none';
            } else {
                document.querySelector('#error').style.display = 'block';
            };
        } else {
            document.querySelector('#error').style.display = 'block';
        };
    });

    buttons[1].addEventListener('click', async (e) => {
        document.querySelector('tbody').removeChild(htmlElement);
        clearForm();
        await deleteElement(e.target.parentNode.parentNode.id);
    });
};

// gets the data from the form and returns an object
function getDataFromForm() {
    let bookObject = {};
    Array.from(document.querySelectorAll('form input'))
        .forEach(input => {
            bookObject[input.id] = input.value;
            input.value = '';
        });

    return bookObject;
};

// fills the form with the info from a given html element
function fillInForm(htmlElement) {
    let formInputs = Array.from(document.querySelectorAll('form input'));
    for (let index = 0; index < 3; index++) {
        formInputs[index].value = htmlElement.children[index].textContent;
    };
};

function appendErrorDiv() {
    let errorDiv = document.createElement('div');
    errorDiv.id = 'error';
    errorDiv.textContent = 'Error: isbn exists or input is incorrect';
    errorDiv.style.display = 'none';
    document.querySelector('form').appendChild(errorDiv);
};

function clearForm() {
    Array.from(document.querySelectorAll('form input'))
        .forEach(input => {
            input.value = '';
        });
};
