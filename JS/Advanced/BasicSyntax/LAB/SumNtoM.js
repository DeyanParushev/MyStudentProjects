function solve(a, b){

    let sum = 0;

    for (let index = Number(a); index <= Number(b); index++) {
        sum += index;
    }

    return sum;
}

solve('8' , '10')
