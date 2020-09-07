function checkMatrix(inputMatrix) {
    let firstRowSum = inputMatrix[0].reduce((a, b) => a + b);

    let matrixIsMagical = false;

    for (let row = 0; row < inputMatrix.length; row++) {
        if(firstRowSum === inputMatrix[row].reduce((a,b) => a+b)){
            matrixIsMagical = true;
        }
    }

    for (let coll = 0; coll < inputMatrix[0].length; coll++) {
        let collSum = 0;
        for (let row = 0; row < inputMatrix.length; row++) {
        
            collSum = collSum + Number(inputMatrix[row][coll]);
        }

        if(collSum !== firstRowSum){
            matrixIsMagical = false;
        }
    }

    console.log(matrixIsMagical);
}

// true
checkMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);

// false
checkMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);

