function solve(input) {

    let output = input.map((value, index, input) => {
        if (index % 2 !== 0) {
            return input[index] * 2;
        }
    }).reverse()
        .filter((x) => x !== undefined)
        .join(' ');

    console.log(output);
}

solve([10, 15, 20, 25]);
