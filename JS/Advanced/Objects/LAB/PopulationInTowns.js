function getTownPopulation(input) {
    let output = {};

    input.map((x) => {
        let citiesAndPopulation = x.split(' <-> ');
        if (!(citiesAndPopulation[0] in output)) {
            output[citiesAndPopulation[0]] = Number(citiesAndPopulation[1]);
        } else {
            output[citiesAndPopulation[0]] += Number(citiesAndPopulation[1]);
        }
    });

    for (const key in output) {
        if (output.hasOwnProperty(key)) {
            console.log(`${key} : ${output[key]}`);
        }
    }
};

getTownPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000

getTownPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);

// Istanbul : 101000
// Honk Kong : 2100004
// Jerusalem : 2352344
// Mexico City : 23401925
