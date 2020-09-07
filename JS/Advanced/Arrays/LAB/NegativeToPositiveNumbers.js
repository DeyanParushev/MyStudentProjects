function solve(input) {
    let result = [];
    input.map((x) =>
        compareToZero(x) ? result.push(x) : result.unshift(x));

    console.log(result.join('\n'));

    function compareToZero(x) {
        if (x < 0) {
            return false;
        }
        else {
            return true;
        }
    }
}

solve([7, -2, 8, 9]);
// -2
// 7
// 8
// 9
