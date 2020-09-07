function countSales(input) {
    let outputObj = {};
    input.map((x) => {
        let extractedInformation = extractInformation(x);
        putExtractedInfoIntoObj(outputObj, extractedInformation);
    })

    function putExtractedInfoIntoObj(object, extractedInformation) {
        let propertyName = extractedInformation[1];
        if (!(extractedInformation[0] in outputObj)) {
            outputObj[extractedInformation[0]] = {
                [propertyName]: Number(extractedInformation[2]) * Number(extractedInformation[3])
            }
        } else {
            if (!(propertyName in outputObj[extractedInformation[0]])) {
                outputObj[extractedInformation[0]][propertyName] = Number(extractedInformation[2]) * Number(extractedInformation[3]);
            } else {
                outputObj[extractedInformation[0]][propertyName] += Number(extractedInformation[2]) * Number(extractedInformation[3]);
            }
        }
    }

    function extractInformation(inputString) {
        let extractedInfo = [];
        let splitedString = inputString.split(' -> ');
        extractedInfo[0] = splitedString[0];
        extractedInfo[1] = splitedString[1];
        extractedInfo[2] = splitedString[2].split(' : ')[0];
        extractedInfo[3] = splitedString[2].split(' : ')[1];
        return extractedInfo;
    }

    Object.keys(outputObj)
        .map((x) => {
            console.log(`Town - ${x}`);
            Object.keys(outputObj[x])
                .map((y) => {
                    console.log(`$$$${y} : ${outputObj[x][y]}`);
                })
        })
}

countSales(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']);

//Town - Sofia
// $$$Laptops HP: 400000
// $$$Raspberry: 300000000
// $$$Audi Q7: 20000000
// Town - Montana
// $$$Portokals: 200000
// $$$Qgodas: 4000
// $$$Chereshas: 300
