function subtract() {
    let firstNumberBox = document.getElementById('firstNumber');
    let secondNumberBox = document.getElementById('secondNumber');

    firstNumberBox.disabled = false;
    secondNumberBox.disabled = false;

    firstNumberBox.type = 'number';
    secondNumberBox.type = 'number';

    document.getElementById('result').innerHTML = Number(firstNumberBox.value) - Number(secondNumberBox.value);
   
    let handler = (e) => {
        if (typeof (Number(firstNumberBox.value)) !== undefined) {
            if (typeof (Number(secondNumberBox.value)) !== undefined) {
                document.getElementById('result').innerHTML = Number(firstNumberBox.value) - Number(secondNumberBox.value);
            };
        };
    };

    firstNumberBox.addEventListener('blur', handler);
    secondNumberBox.addEventListener('blur', handler);
};
