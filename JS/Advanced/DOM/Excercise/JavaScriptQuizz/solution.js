function solve() {
  let body = document.getElementById('quizzie');
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];

  let finalScore = 0;
  let sectionCounter = 0;
  let sections = document.getElementsByTagName('section');

  let handler = (e) => {
    let target = e.target;

    sections[sectionCounter].style.display = "none";

    if (target.className === 'answer-text') {
      if (correctAnswers.includes(target.innerHTML)) {
        finalScore++;
      };

      sectionCounter++;

      if (sectionCounter < sections.length) {
        sections[sectionCounter].style.display = "block";
      };

      if (sectionCounter === sections.length) {
        let newElement = document.createElement('div');

        if (finalScore < sections.length) {
          newElement.innerHTML = `"You have ${finalScore} right answers`;
        } else {
          newElement.innerHTML = "You are recognized as top JavaScript fan!";
        };

        document.getElementById('results').style.display = "block";
        document.getElementsByTagName('h1')[1].appendChild(newElement);
        body.removeEventListener('click', handler);
      };
    };
  };

  body.addEventListener('click', handler);
};
