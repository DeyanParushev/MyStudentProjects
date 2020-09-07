class Stringer {
    constructor(initialString, length) {
        this.innerString = initialString;
        this.innerLength = length;
    };

    decrease(value) {
        this.innerLength -= value;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        };

        let resultString = this.innerString.substring(0, this.innerLength);
        return resultString;
    };

    increase(value) {
        this.innerLength += value;

        let resultingString = this.innerString.substring(0, this.innerLength);
        return resultingString;
    };

    toString() {
        if (this.innerLength < this.innerString.length) {
            return this.innerString.substring(0, this.innerLength) + '...';
        } else if (this.innerLength === 0) {
            return '...';
        } 

        return this.innerString.substring(0, this.innerLength);
    }
};

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
