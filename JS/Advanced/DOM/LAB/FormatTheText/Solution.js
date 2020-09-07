function solve() {

  let inputText = document.getElementById('input').textContent;
  let sentencesArr = inputText.split('.');
  let counter = 0;
  let sentecesLeft = sentencesArr.length % 3;
  let outputStr = '';

  for (let index = 0; index < sentencesArr.length; index++) {
    if (counter < 3) {
      if (sentencesArr.length > 0) {
        outputStr += sentencesArr[index] + '.';
        counter++;
      }
    } else {

      let newElement = document.createElement('p');
      newElement.textContent = outputStr;
      let targetElement = document.getElementById('output');
      targetElement.appendChild(newElement);

      counter = 0;
      outputStr = ''
      index--;
    }
  }

  let finalElement = document.createElement('p');
  finalElement.textContent = outputStr;
  let targetElement = document.getElementById('output');
  targetElement.appendChild(finalElement);
}
