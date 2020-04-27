function arrayMap(inputArray, func) {
    let result = [];

    for (let index = 0; index < inputArray.length; index++) {
        result.push(func(inputArray[index]));
    };
    return result;
};


let nums = [1, 2, 3, 4, 5];
console.log(arrayMap(nums, (item) => item * 2)); 
// [ 2, 4, 6, 8, 10 ]


let letters = ["a", "b", "c"];
console.log(arrayMap(letters, (l) => l.toLocaleUpperCase())) 
// [ 'A', 'B', 'C' ]
