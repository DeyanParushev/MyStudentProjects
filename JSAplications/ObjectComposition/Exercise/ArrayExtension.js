(function arrExtension() {
    Array.prototype.last = function() {
        if (this.length > 0) {
            return this[this.length - 1];
        };
    };

    Array.prototype.sum = function() {
        return this.reduce((x, y) => x + y, 0);
    };

    Array.prototype.average = function() {
        return this.sum() / this.length;
    };

    Array.prototype.skip = function(n) {
        let neArr = [];
        if (n > 0 && n < this.length) {
            for (let index = n; index < this.length; index++) {
                neArr.push(this[index]);
            };

            return neArr;
        };
    };

    Array.prototype.take = function(n) {
        let neArr = [];
        if (n > 0 && n < this.length) {
            for (let index = 0; index <= n; index++) {
                neArr.push(this[index]);
            };

            return neArr;
        };
    };
}());

let arr = [1, 2, 3];
console.log(arr.skip(1));

// [ 2, 3 ]
