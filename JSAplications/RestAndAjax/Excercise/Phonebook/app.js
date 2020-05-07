function attachEvents() {
    let loadButton = document.querySelector('#btnLoad');
    let creatButton = document.querySelector('#btnCreate');
    let contactList = document.querySelector('#phonebook');
    let editUrl = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
    let contacts = [];

    function showContacts() {
        fetch(editUrl)
            .then((response) => {
                return response.json();
            })
            .then((parsedResponse) => {
                Object.keys(parsedResponse)
                    .forEach((contact) => {
                        let deleteButton = document.createElement('button');
                        deleteButton.textContent = 'Delete';

                        let li = document.createElement('li');
                        li.textContent = `${parsedResponse[contact].person}: ${parsedResponse[contact].phone}`;
                        li.appendChild(deleteButton);
                        contactList.appendChild(li);
                    });
                contacts = Array.from(Object.entries(parsedResponse));
                console.log(contacts);
            });
    };

    loadButton.addEventListener('click', (e) => {
        contactList.innerHTML = '';
        showContacts();
    });

    creatButton.addEventListener('click', (e) => {
        let person = document.querySelector('#person').value;
        let phone = document.querySelector('#phone').value;
        let personJson = JSON.stringify({ person, phone });

        fetch(editUrl, {
            'method': "POST",
            'content-type': 'application/json',
            body: personJson
        });

        document.querySelector('#person').value = '';
        document.querySelector('#phone').value = '';
        contactList.innerHTML = '';
        showContacts
            ();
    });

    contactList.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'Delete') {
            let personalInfo = e.target
                .parentNode
                .textContent
                .split(': ');

            let personName = personalInfo[0];
            let phone = personalInfo[1].substring(0, personalInfo[1].length - 6);
            let serverKey = contacts.find(x => x[1].person === personName && x[1].phone === phone)[0];

            let deleteURL = `https://phonebook-nakov.firebaseio.com/phonebook/${serverKey}.json`;

            fetch(deleteURL, {
                method: 'DELETE',

            });
            contactList.removeChild(e.target.parentNode);
        };
    });
}

attachEvents();
