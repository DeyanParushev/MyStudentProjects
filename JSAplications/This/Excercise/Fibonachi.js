function getFibonator() {
    let currentValue = {
        firstValue: 1,
        phiNumber: (Math.sqrt(5) + 1) / 2,
        newValue: function () {
            let number = (Math.pow(currentValue.phiNumber, currentValue.firstValue) - ((Math.pow(-1), currentValue.firstValue) /
                (Math.pow(currentValue.phiNumber, currentValue.firstValue))))
                / (Math.sqrt(5));
                currentValue.firstValue++;
                return Math.ceil(number);
        },
    };

    let output = currentValue.newValue
    return output;
};

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
