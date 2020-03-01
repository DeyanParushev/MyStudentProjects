function solve(input) {
    let counter = 0;

    for (let index = 1; index < input.length ; index++) {
        for (let j = 1; j < input[index].length; j++) {
            
            if (input[index][j] === input[index - 1][j]) {
                counter++;
            }

            if (input[index][j] === input[index][j - 1]) {
                counter++;
            }
        }
    }

    console.log(counter);
}

solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2'],
]);
