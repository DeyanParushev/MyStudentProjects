let result = (function () {
    let id = {
        0: 0
    }

    class Extensible {
        constructor() {
            let lastValue = Object.values(id);
            this.id = lastValue[lastValue.length - 1];

            let newId = lastValue[lastValue.length - 1] + 1;
            id[newId] = newId;
        };

        extend(template) {
            let templateKeys = Object.keys(template);
            
            templateKeys.forEach(key => {
                if(typeof(template[key]) === 'function'){
                    let methodName = key;
                    Extensible.prototype[methodName] = template[key];
                } else{
                    let propertyName = key;

                    this[propertyName] = template[key];
                }
            });
        }

    };

    return Extensible;
}());

let ext = result;

let obj = new ext();
let template = {
    extensionMethod: function () {
        return 'I`m a function'
    },
    extensionProperty: 'someString'
};

obj.extend(template)
console.log(template.extensionMethod());
//I`m a function

console.log(template.extensionProperty);
//someString

