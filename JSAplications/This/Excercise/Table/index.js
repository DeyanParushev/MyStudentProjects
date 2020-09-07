function solve() {
   Array.from(document.querySelectorAll('tbody tr'))
      .forEach(element => {
         element.addEventListener('click', (e) => {
            if (element.style.backgroundColor !== "") {
               element
                  .style
                  .backgroundColor = "";
            } else {

               Array.from(element.parentElement.children)
                  .map(x => {
                     if (x.style.backgroundColor !== "") {
                        x.style.backgroundColor = '';
                     }
                  })
               element
                  .style
                  .backgroundColor = "#413f5e";
            };
         });
      });
};
