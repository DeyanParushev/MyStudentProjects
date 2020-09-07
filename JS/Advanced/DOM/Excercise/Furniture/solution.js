function solve() {

  let exerciseObject = document.getElementById('exercise');

  let eventHandler = (e) => {
    let target = e.target;

    if (target.innerHTML === 'Generate') {
      let objects = JSON.parse(document.getElementsByTagName('textarea')[0].value);

      objects.forEach(obj => {
        let newTrElement = document.createElement('tr');
        document.getElementsByTagName('tbody')[0].appendChild(newTrElement);
        newTrElement.append(createTableRow(obj));
      });

      document.getElementsByTagName('input')[0].disabled = false;
    } else if (target.innerHTML === 'Buy') {
      let checkedElementsBoxes = Array.from(document.getElementsByTagName('input'));
      let checkedElements = checkedElementsBoxes.filter(x => x.checked === true);

      let items = checkedElements.map(x => getItemInformation(x));
      let itemNames = items.map(x => x.name);
      let totalPrice = items.reduce((a, item) => a + item.price, 0);
      let totalComfort = items.reduce((a, item) => a + item.comfort, 0) / items.length;

      let outputTextArea = document.getElementsByTagName('textarea')[1];

      outputTextArea.innerHTML += `Bought furniture: ${itemNames.join(", ")}\n`;
      outputTextArea.innerHTML += `Total price: ${totalPrice.toFixed(2)}\n`;
      outputTextArea.innerHTML += `Average decoration factor: ${totalComfort}`;

      let rows = document.querySelectorAll('tbody tr');
      let tds = rows[1].children;

      exerciseObject.removeEventListener('click', eventHandler);
    };
  };

  function createTableRow(obj) {
    let tableRow = document.createElement('tr');

    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        let tableData = document.createElement('td');
        let newProperty = '';

        if (prop === 'img') {
          newProperty = document.createElement('img');
          newProperty.src = obj[prop];
        } else {
          newProperty = document.createElement('p');
          newProperty.innerHTML = obj[prop];
        }

        tableData.appendChild(newProperty);

        return tableData;
      };
    };

    let checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    let checkBoxTD = document.createElement('td');
    checkBoxTD.appendChild(checkBox);

    tableRow.appendChild(checkBoxTD);

    return tableRow;
  }

  function getItemInformation(checkedBox) {
    let itemComfort = Number(checkedBox.parentNode
      .previousSibling
      .firstChild
      .innerHTML);

    let itemPrice = Number(checkedBox.parentNode
      .previousSibling
      .previousSibling
      .firstChild
      .innerHTML);

    let itemNames = checkedBox.parentNode
      .parentNode
      .firstChild
      .nextSibling
      .firstChild
      .innerHTML;

    let item = {
      name: itemNames,
      price: itemPrice,
      comfort: itemComfort;
    };

    return item;
  };

  exerciseObject.addEventListener('click', eventHandler);
};
