function solve(...params) {

    let charSum = 0;
    params.forEach(x => charSum += x.length);

    let averageSum = Math.floor(charSum / params.length);

    console.log(charSum);
    console.log(averageSum);
}

solve('ivan', 'patka');
