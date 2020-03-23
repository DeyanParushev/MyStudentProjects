function solve() {

    let calculatorBody = document.getElementById('calculator');

    let handler = (e) => {
        let target = e.target;
        let expressionField = document.getElementById('expressionOutput');
        let resultField = document.getElementById('resultOutput');

        if (target.type === 'button') {
            if (target.innerHTML === '=') {
                let lastChar = Number(expressionField.innerHTML[expressionField.innerHTML.length - 1]);

                let separator = expressionField.innerHTML.match('[\/*x+-]');

                let numbers = expressionField.innerHTML.split(separator)
                    .filter((x) => x !== "");

                if (separator == 'x') {
                    separator = '*';
                }

                if (numbers.length > 1) {
                    resultField.innerHTML = eval(numbers[0] + separator + numbers[1]);
                } else {
                    resultField.innerHTML = 'NaN';
                }

            } else if (target.innerHTML === 'C') {
                expressionField.innerHTML = '';
                resultField.innerHTML = '';

            } else {
                let symbol = target.innerHTML;
                if (symbol === '*' | symbol === '+' | symbol === '-' | symbol === '/') {
                    target.innerHTML = ' ' + symbol + ' ';
                }
                expressionField.innerHTML += target.innerHTML;
            };
        };
    };

    calculatorBody.addEventListener('click', handler);
};
