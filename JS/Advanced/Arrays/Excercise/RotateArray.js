function rotate(inputArr) {
    let rotations = Number(inputArr[inputArr.length - 1]);
    inputArr.splice(inputArr.length - 1, 1);

    for (let i = 0; i < rotations; i++) {
        let lastElement = inputArr.pop();
        inputArr.unshift(lastElement);
    }

    console.log(inputArr.join(' '));
}

rotate(['1',
    '2',
    '3',
    '4',
    '2']);

// 3 4 1 2

rotate(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);

// Orange Coconut Apple Banana
