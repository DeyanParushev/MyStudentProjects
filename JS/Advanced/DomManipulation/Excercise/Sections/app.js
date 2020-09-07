function create(words) {
   words.forEach(element => {
      document.getElementById('content').appendChild(createDiv(element));
   });

   document.getElementById('content')
      .addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
      });

   function createDiv(paragraphContent) {
      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.innerHTML = paragraphContent;
      paragraph.style.display = 'none';

      div.appendChild(paragraph);
      return div;
   };
};
