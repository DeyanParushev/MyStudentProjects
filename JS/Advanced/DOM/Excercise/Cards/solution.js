function solve() {
   let cardsElement = document.getElementsByTagName('img');
   let leftSpan = document.getElementById('result').childNodes[1];
   let rightSpan = document.getElementById('result').childNodes[5];

   Array.from(cardsElement).forEach(card => {
      card.addEventListener('click', (e) => {
         turnCardUp(card);

         if (checkSpansAreFilled(leftSpan, rightSpan)) {
            let leftCard = getCardObjects(leftSpan, rightSpan)[0];
            let rightCard = getCardObjects(leftSpan, rightSpan)[1];

            markCards(leftCard, rightCard);

            document.getElementById("history")
               .innerHTML += `[${leftCard.name} vs ${rightCard.name}] `;

            leftSpan.textContent = '';
            rightSpan.textContent = '';
         };
      });
   });

   function turnCardUp(card) {
      card.src = "images/whiteCard.jpg";

      if (card.parentNode.id === "player1Div") {
         leftSpan.textContent = card.name;
      } else if (card.parentNode.id === "player2Div") {
         rightSpan.textContent = card.name;
      };
   };

   function checkSpansAreFilled(leftSpan, rightSpan) {
      let twoCardsAreChosen = false;
      if (leftSpan.textContent !== "" && rightSpan.textContent !== "") {
         twoCardsAreChosen = true;
      };

      return twoCardsAreChosen;
   };

   function getCardObjects(leftSpan, rightSpan) {
      let cardsArray = Array.from(document.getElementsByTagName('img'));
      let leftCard =
         cardsArray.filter(x => x.name === leftSpan.textContent
            && x.parentNode.id === "player1Div")[0];
      let rightCard = cardsArray.filter(x => x.name === rightSpan.textContent
         && x.parentNode.id === "player2Div")[0];

      return [leftCard, rightCard];
   };

   function markCards(leftCard, rightCard) {
      if (Number(leftCard.name) > (Number(rightCard.name))) {
         leftCard.style.border = "2px solid green";
         rightCard.style.border = "2px solid red";
      } else {
         leftCard.style.border = "2px solid red";
         rightCard.style.border = "2px solid green"
      };
   };
};
