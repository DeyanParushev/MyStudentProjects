function solve(inputArr) {
    let step = Number(inputArr[inputArr.length - 1]);
    inputArr.splice(inputArr.length - 1, 1);

    printEveryNthElement(inputArr, step);
    
    function printEveryNthElement(inputArr, step) {
        for (let index = 0; index < inputArr.length; index += step) {
            console.log(inputArr[index]);
        }
    }
}

solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);

solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']);

solve(['1',
    '2',
    '3',
    '4',
    '5',
    '6']);
