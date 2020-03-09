function storeJuice(input) {
    let juices = {};
    let outputBottles = {};
    input.map(x => x.split(' => ')
        .reduce((acc, current) => putInputIntoObject(acc, current)));

    function putInputIntoObject(prop, value) {
        if (!(prop in juices)) {
            juices[prop] = Number(value)
        } else {
            juices[prop] += Number(value);
        }

        if (Math.floor(juices[prop] / 1000) > 0) {
            outputBottles[prop] = Math.floor(juices[prop] / 1000);
        }
    }

    Object.keys(outputBottles).map(x => console.log(`${x} => ${outputBottles[x]}`));
}

storeJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

// Orange => 2
// Peach => 2

storeJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);

// Pear => 8
// Watermelon => 10
// Kiwi => 4
