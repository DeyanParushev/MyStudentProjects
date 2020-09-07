function solve(input) {
    let output = [];

    output.push(Math.min(...input));
    input.splice(input.indexOf(output[0], 1));
    output.push(Math.min(...input))

    console.log(output.join(' '));
}

solve([30, 15, 50, 5]);

//5 15
