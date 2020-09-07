let fireBaseURL = `https://testapp-1045f.firebaseio.com/Books` // put server link here

export async function loadElements() {
    let url = fireBaseURL + '.json';
    let response = await fetch(url);
    let parsedResponse = await response.json();

    return parsedResponse;
};


export async function createElement(book) {
    let url = fireBaseURL + '.json';
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(book),
    });

    let parsedResponse = await response.json();

    return parsedResponse;
};

export async function editElement(book, elementID) {
    let elementURL = `${fireBaseURL}/${elementID}.json`;
    let response = await fetch(elementURL, {
        method: "PATCH",
        body: JSON.stringify(book),
    });

    let parsedResponse = await response.json();

    return parsedResponse;
};

export async function deleteElement(elementID) {
    let elementURL = `${fireBaseURL}/${elementID}.json`;
    let response = await fetch(elementURL, {
        method: 'DELETE'
    });

    let parsedResponse = await response.json();

    return parsedResponse;
};
