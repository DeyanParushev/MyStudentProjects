function solve() {
    let binaryConvertOption = document.createElement('option');
    binaryConvertOption.value = 'binary';
    binaryConvertOption.text = 'Binary';

    let hexadecimalConvertOption = document.createElement('option');
    hexadecimalConvertOption.value = 'hexadecimal';
    hexadecimalConvertOption.text = 'Hexadecimal';

    let selectForm = document.getElementById('selectMenuTo');
    selectForm.add(binaryConvertOption);
    selectForm.add(hexadecimalConvertOption);
    selectForm.getElementsByTagName('option')[0].hidden = true;

    let convertButton = document.getElementsByTagName('button')[0];

    convertButton.addEventListener('click', (e) => {
        let outputOption = selectForm.value;
        let inputNumber = Number(document.getElementById('input').value);
        let outputResult;

        if (outputOption === 'binary') {
            outputResult = inputNumber.toString(2);
        } else if (outputOption === 'hexadecimal') {
            outputResult = inputNumber.toString(16).toUpperCase();
        }

        document.getElementById('result').value = outputResult;
    });
};
