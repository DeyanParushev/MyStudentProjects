function inputToJSON(inputArr) {

    let objectsArr = [];

    for (let index = 1; index < inputArr.length; index++) {
        let object = createObjectWithProp(getPropertyNames(inputArr[0]));
        fillObjectsProperties(object, getPropertyNames(inputArr[index]));
        objectsArr.push(object);
    }

    function fillObjectsProperties(object, propValues) {
        let counter = 0;
        for (const key in object) {
            if (object.hasOwnProperty(key)) {

                if (counter > 0) {
                    object[key] = Number(Number(propValues[counter]).toFixed(2));
                } else {
                    object[key] = propValues[counter];
                }
                counter++;
            }
        }
    }

    function createObjectWithProp(propsArr) {
        let obj = {};

        propsArr.forEach(propertyName => {
            obj[propertyName] = '';
        });

        return obj;
    }

    function getPropertyNames(inputStr) {

        let output = inputStr.split('|')
            .filter((x) => x !== '')
            .map((x) => x.replace(/^\s/g, ""))
            .map((x) => x.replace(/\s$/g, ""));
        return output;
    }

    let output = JSON.stringify(objectsArr);
    console.log(output);
}

inputToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

inputToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);
