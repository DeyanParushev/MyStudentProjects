function solve(arrLength, sumNumber) {

    let arr = [1];

    for (let i = 0; i < arrLength - 1; i++) {
        arr.push(sumPreviousElements(i, arr));
    }

    function sumPreviousElements(index, array) {
        if (index < sumNumber) {
            let number = array.slice(0, index + 1)
                .reduce((ax, y) => ax + y);

            return number;
        }
        else {
            let number = array.slice(index - sumNumber + 1, index + 1)
                .reduce((x, y) => x + y);
            return number;
        }
    }

    console.log(arr.join(' '));
}

solve(8, 2);
