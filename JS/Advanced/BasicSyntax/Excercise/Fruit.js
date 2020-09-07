function solve(fruit, weight, price){
    let kg = weight / 1000;
    let money = price * kg;

    return `I need $${money.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`
}

console.log(solve('orange', 2500, 1.8));
