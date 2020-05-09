function attachEvents() {
    let authorRef = document.querySelector('#author');
    let contentRef = document.querySelector('#content');
    let url = `https://rest-messanger.firebaseio.com/messanger`;
    let textAreaRef = document.querySelector('#messages');

    document.querySelector('#submit')
        .addEventListener('click', (e) => {
            let newMessage = {
                author: authorRef.value,
                content: contentRef.value
            };
            authorRef.value = '';
            contentRef.value = '';

            let requestBody = JSON.stringify(newMessage);
            fetch(`https://rest-messanger.firebaseio.com/messanger.json`, {
                method: 'POST',
                body: requestBody
            });

            textAreaRef.value += `${newMessage.author}: ${newMessage.content}\n`
        });

    document.querySelector('#refresh')
        .addEventListener('click', (e) => {
            textAreaRef.value = '';
            authorRef.value = '';
            contentRef.value = '';
            
            fetch('https://rest-messanger.firebaseio.com/messanger.json')
            .then((response) => {
                return response.json();})
            .then((parsedResponse) => {
                Array.from(Object.values(parsedResponse))
                    .forEach((element) => {
                        textAreaRef.value += `${element.author}: ${element.content}\n`
                    });
                
            })
        })
}

attachEvents();
