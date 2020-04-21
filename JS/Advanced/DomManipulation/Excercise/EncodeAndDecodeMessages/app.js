function encodeAndDecodeMessages() {
    let object = {
        Encode: (message) => {
            let encryptedMessage = '';
            for (let index = 0; index < message.length; index++) {
                let symbol = message.charCodeAt(index);
                symbol +=1;
                encryptedMessage += String.fromCharCode(symbol);
            };

            return encryptedMessage;
        },
        Decode: (message) => {
            let decryptedMessage = '';
            for (let index = 0; index < message.length; index++) {
                let symbol = message.charCodeAt(index);
                symbol -=1;
                decryptedMessage += String.fromCharCode(symbol);
            };

            return decryptedMessage;
        }
    };

    let encodeButton = document.getElementsByTagName('button')[0];
    let decodeButton = document.getElementsByTagName('button')[1];

    encodeButton.addEventListener('click', (e) => {
        let message = e.target.parentNode.children[1].value;
        let encodedMessage = object.Encode(message);
        e.target.parentElement.nextElementSibling.children[1].value = encodedMessage;
        e.target.parentNode.children[1].value = '';
    });

    decodeButton.addEventListener('click', (e) => {
        let encodedMessage = e.target.parentNode.children[1].value;
        let decodedMessage = object.Decode(encodedMessage);
        e.target.parentNode.children[1].value = decodedMessage;
    });
};
