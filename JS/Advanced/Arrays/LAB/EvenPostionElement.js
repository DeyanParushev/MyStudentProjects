function solve(input) {
    let result = input.map((value, index, arr) => 
    getEvenElements(index, arr))
    .filter((x) => x != undefined)
    .join(' ');

    function getEvenElements(index, arr) {
        if (index % 2 === 0) {
            return arr[index];
        }
    }
    console.log(result);
}

solve(['20', '30', '40']);
