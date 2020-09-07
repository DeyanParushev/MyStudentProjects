function extract(inputArr) {
    let output = [];
    let currentMax = Number.MIN_SAFE_INTEGER;

    inputArr.map((x) => {
        if (x >= currentMax) {
            currentMax = x;
            output.push(x);
        }
    });

    console.log(output.join('\n'));
};
