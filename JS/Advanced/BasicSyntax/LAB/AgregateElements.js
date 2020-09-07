function solve(arr) {

    let sum = arr.reduce((a, b) => a + b);
    let inverseSUm = arr.reduce((a, b) => a + 1 / b, 0);
    let concat = arr.reduce((a, b) => String(a) + b);

    console.log(sum);
    console.log(inverseSUm);
    console.log(concat);
}

solve([2, 4, 8, 16]);
