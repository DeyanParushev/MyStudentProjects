function sumByTown(inputStr) {
    let output = {};

    inputStr.map((value, index, inputStr) => {
        if (index % 2 === 0) {
            if (!(inputStr[index] in output)) {
                output[inputStr[index]] = 0;
            };
        } else {
            output[inputStr[index - 1]] += Number(value);
        };
    });
    console.log(JSON.stringify(output));
};

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
// {"Sofia":25,"Varna":7}

sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);
// {"Sofia":20,"Varna":3,"sofia":5,"varna":4}
