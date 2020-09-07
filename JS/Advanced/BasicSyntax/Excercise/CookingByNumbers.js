function solve(strArr) {
    let number = Number(strArr[0]);
    strArr.splice(0, 1);

    let operand = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x + 1,
        bake: (x) => x * 3,
        fillet: (x) => x = 0.8 * x
    }

    return strArr.map(x => number = operand[x](number));
}

console.log(solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']));
console.log(solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']));
