function solve() {
   let sendCommandButton = document.getElementById('send');

   sendCommandButton.addEventListener('click', (e) => {
      let input = document.getElementById('chat_input')
      let textToSend = input.value;

      let newDivElement = document.createElement('div');
      newDivElement.innerHTML = textToSend;
      newDivElement.classList.add('message', 'my-message');

      let messagesDiv = document.getElementById('chat_messages');
      messagesDiv.appendChild(newDivElement);
      document.getElementById('chat_input').value = '';
   })
}
