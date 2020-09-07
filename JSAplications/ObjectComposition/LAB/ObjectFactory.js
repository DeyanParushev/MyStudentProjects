function solve(inputArr) {
    let parsedInput = JSON.parse(inputArr);
    let output = {};

    parsedInput.reduce((x, y) => Object.assign(x, y), output);
    return output;
};

console.log(solve(`[{"prop1": 1},{"prop2":2},{"prop3":3}]`));
//{ prop1: 1, prop2: 2, prop3: 3 }
