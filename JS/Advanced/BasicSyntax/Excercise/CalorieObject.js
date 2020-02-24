function solve(inputArr) {
    return inputArr.reduce((acc, x, i, arr) => {
        if (i % 2 === 0) {
            acc[x] = undefined;
        }
        else {
            acc[arr[i-1]] = +x;
        }

        return acc
    }, {})
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
