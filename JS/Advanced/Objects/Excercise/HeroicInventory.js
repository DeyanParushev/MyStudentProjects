function makeHeroFromString(input) {
    let print = input.map((x) => createObjFromArr(extractHeroInformation(x)), {});

    function createObjFromArr(inputArr) {
        let obj = {
            name: inputArr[0],
            level: Number(inputArr[1]),
            items: inputArr.slice(2, inputArr.length)
        }

        return obj;
    }

    function extractHeroInformation(stringInput) {
        let heroInformation = [];
        stringInput.split(' / ')
            .map((x) => x.split(', ')
                .map((y) => heroInformation.push(y)));

        return heroInformation;
    }

    console.log(JSON.stringify(print));
}

makeHeroFromString(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

// [{ "name": "Isacc", "level": 25, "items": ["Apple", "GravityGun"] },
// { "name": "Derek", "level": 12, "items": ["BarrelVest", "DestructionSword"] },
// { "name": "Hes", "level": 1, "items": ["Desolator", "Sentinel", "Antara"] }]
