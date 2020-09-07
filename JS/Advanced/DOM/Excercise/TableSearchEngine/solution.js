function solve() {
   let button = document.getElementById('searchBtn');

   button.addEventListener('click', (e) => {
      let searchedText = document.getElementById('searchField').value;

      let tableRows = document.querySelectorAll('tbody td');
      let trArray = Array.from(tableRows);

      trArray.map((value, index, trArray) => {
         if(value.innerHTML.toLowerCase().includes(searchedText.toLowerCase())){
               tableRows[index].parentElement.className = 'select';
         }
      });

      document.getElementById('searchField').value = '';
   });
};
