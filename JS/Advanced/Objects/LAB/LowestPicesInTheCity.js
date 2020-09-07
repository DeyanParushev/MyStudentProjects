function getLowestPrice(inputInfo) {
    let products = {};

    inputInfo.map((x) => fillInTheLowestPrice(products, x));

    function fillInTheLowestPrice(object, inputStr) {
        let extractedInfo = inputStr.split(' | ');

        if (!(extractedInfo[1] in object)) {
            object[extractedInfo[1]] = {
                price: Number(extractedInfo[2]),
                city: extractedInfo[0]
            }
        } else {
            if (Number(extractedInfo[2] < object[extractedInfo[1]].price)) {
                object[extractedInfo[1]].price = Number(extractedInfo[2]);
                object[extractedInfo[1]].city = extractedInfo[0];
            }
        }
    }

    Object.keys(products).map((x) => {
        console.log(`${x} -> ${products[x].price} (${products[x].city})`);
    })
}

getLowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);

// Sample Product -> 1000(Sample Town)
// Orange -> 2(Sample Town)
// Peach -> 1(Sample Town)
// Burger -> 10(New York)

getLowestPrice(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);

// Audi -> 1000 (Mexico City)
// BMW -> 99999 (Mexico City)
// Mitsubishi -> 1000 (New York City)
// Mercedes -> 1000 (Washington City)
// NoOffenseToCarLovers -> 0 (Sofia City)
