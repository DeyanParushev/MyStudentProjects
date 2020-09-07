function classSolution() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = this.weight * this.melonSort.length;
        };

        get elementIndex() {
            return this._elementIndex;
        };

        toString() {
            let output = `Element: ${this.constructor.name.substring(0, this.constructor.name.length - 5)}\n`;
            output += `Sort: ${this.melonSort}\n`;
            output += `Element Index: ${this.elementIndex}`;

            return output;
        };
    };

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        };
    };

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        };
    };

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        };
    };

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        };
    };

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
            this.sorts = ['Fire', 'Earth', 'Air', 'Water'];
            this.counter = 0;
        };

        morph() {
            if (this.counter < this.sorts.length) {
                this.element = this.sorts[this.counter];
                this.counter++;
            } else {
                this.counter = 0;
                this.element = this.sorts[this.counter];
                this.counter++;
            };
        };

        toString() {
            let output = `Element: ${this.element}\n`;
            output += `Sort: ${this.melonSort}\n`;
            output += `Element Index: ${this.elementIndex}`;

            return output;
        };
    };

    return {
        Melon,
        Watermelon,
        Firemelon,
        Airmelon,
        Earthmelon,
        Melolemonmelon
    };
};

let melons = classSolution();
let wm = new melons.Firemelon(150, 'Melo');

console.log(wm.toString());
// Element: Fire
// Sort: Melo
// Element Index: 600
