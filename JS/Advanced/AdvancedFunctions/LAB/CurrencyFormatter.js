function currencyReducer(fn) {
    let separator = ',';
    let symbol = '$';
    let symbolFirst = true;

    return function(number){
        return fn(separator,symbol, symbolFirst, number);
    }
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollar = currencyReducer(currencyFormatter);


console.log(dollar(5345));
