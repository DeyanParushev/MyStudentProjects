function factory(inputObj) {
    let engines = [
        Small = { power: 90, volume: 1800 },
        Normal = { power: 120, volume: 2400 },
        Monster = { power: 200, volume: 3500 },
    ];

    let carriages = [
        Hatchback = { type: 'hatchback', color: '' },
        Coupe = { type: 'coupe', color: '' }
    ];

    let criteria = Object.values(inputObj);

    let model = criteria[0];
    let engine = engines.filter(x => x.power >= criteria[1])[0];
    let carriage = carriages.find(x => x.type === criteria[3]);
    carriage.color = criteria[2];

    let wheelDimension = criteria[4] % 2 === 0 ? --criteria[4] : criteria[4];
    let wheels = [wheelDimension, wheelDimension, wheelDimension, wheelDimension];

    let car = {
        model: model,
        engine: engine,
        carriage: carriage,
        wheels: wheels
    };

    return car;
}

console.log(factory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

// {
//     model: 'VW Golf II',
//     engine: { power: 90, volume: 1800 },
//     carriage: { type: 'hatchback', color: 'blue' },
//     wheels: [13, 13, 13, 13]
// }

console.log(factory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));

// {
//     model: 'Opel Vectra',
//     engine: { power: 120, volume: 2400 },
//     carriage: { type: 'coupe', color: 'grey' },
//     wheels: [17, 17, 17, 17]
// }
