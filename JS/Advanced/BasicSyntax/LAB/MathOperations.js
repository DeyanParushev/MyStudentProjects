function solve(operation, ...params){
    return params.reduce((a,b) => eval(`${a} ${operation} ${b}`));
}

console.log(solve('+', 2, 5, 6));
