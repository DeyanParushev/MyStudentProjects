function addItem() {
    let textValue = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    let selectItem = document.getElementById('menu');

    let newOption = document.createElement('option');
    newOption.text = textValue;
    newOption.value = value;

    selectItem.add(newOption);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
};
