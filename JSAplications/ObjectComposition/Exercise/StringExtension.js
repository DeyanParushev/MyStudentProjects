(function() {
    String.prototype.ensureStart = function(str) {
        if (!this.startsWith(str)) {
            return `${str}` + this;
        }

        return `${this}`;
    };

    String.prototype.ensureEnd = function(str) {
        if (!this.endsWith(str)) {
            return this + `${str}`;
        }

        return `${this}`;
    };

    String.prototype.isEmpty = function() {
        if (this.length > 0) {
            return false;
        };

        return true;
    };

    String.format = (value, ...arguments) => {
        let counter = 0;
        let newVal = value;

        while (true) {
            let newPlaceHolder = /{\d+}/.exec(newVal);
            if (newPlaceHolder !== null && arguments[counter] !== undefined) {
                newVal = newVal.replace(newPlaceHolder, arguments[counter]);
                counter++;
            } else {
                break;
            };
        };

        return newVal;
    };

}());

let someString = 'quick brown fox jumps over the lazy dog';

// quick brown fox jumps over the lazy dog
console.log(someString);

// the quick brown fox jumps over the lazy dog
console.log(someString.ensureStart('the '));
