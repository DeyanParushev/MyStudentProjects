function solve(input) {
    let arr = input.match(/\w+/gim);

    return arr.map(x => x.toUpperCase())
        .join(", ");

}

console.log(solve('Hi, how are you?'));
