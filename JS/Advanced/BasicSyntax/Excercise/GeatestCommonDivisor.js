function solve(a, b){
    let smallerNumber = Math.min(a, b);
    let delimiter = Number.MIN_SAFE_INTEGER;

    for (let index = 1; index <= smallerNumber; index++) {
        
        if(a % index === 0 && b % index ===0){
            delimiter = index;
        }
    }

    return delimiter;
}

console.log(solve(2154, 458));
