function solve(coordinatesArr) {
    function hypothenuse(x, y) {
        let result = Math.sqrt(x ** 2 + y ** 2);
        return result;
    }

    for (let i = 0; i < coordinatesArr.length; i += 2) {
        printResult(coordinatesArr[i], coordinatesArr[i + 1], 0, 0, Number.isInteger(hypothenuse(coordinatesArr[i], coordinatesArr[i + 1])));
    }

    let yChange = Math.abs(coordinatesArr[1] - coordinatesArr[3]);
    let xChange = Math.abs(coordinatesArr[0] - coordinatesArr[2]);

    printResult(coordinatesArr[0], coordinatesArr[1], coordinatesArr[2], coordinatesArr[3], Number.isInteger(hypothenuse(xChange, yChange)));

    function printResult(x1, y1, x2, y2, condition) {
        if (condition) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}
