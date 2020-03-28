function solve() {
   let shoppingCart = document.querySelector('.shopping-cart');
   let textArea = document.getElementsByTagName('textarea')[0];

   let totalPrice = 0;
   let products = [];

   let eventHandler = (e) => {
      let selectedElement = e.target;

      if (selectedElement.className === 'add-product') {
         let price = Number(selectedElement.parentNode.nextSibling.nextSibling.innerHTML);
         let name = selectedElement.parentNode
            .previousSibling
            .previousSibling
            .firstChild
            .nextSibling
            .innerHTML;

         if (!products.includes(name)) {
            products.push(name);
         };

         totalPrice += price;
         textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;

      } else if (selectedElement.className === 'checkout') {
         textArea.textContent += `You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`;

         shoppingCart.removeEventListener('click', eventHandler);
      };
   };

   shoppingCart.addEventListener('click', eventHandler);
};
