function classSolution() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        };

        changeUnits(unit) {
            this.units = unit;
        };

        get area() {
            return '';
        };

        toString() {
            return `Figures units: ${this.units} Area: ${this.area}`;
        }

        transformDimensionFromCm(value) {
            let converterFromCm = {
                m: (value) => {
                    return value / 100;
                },
                cm: (value) => {
                    return value;
                },
                mm: (value) => {
                    return value * 10;
                }
            };

            return converterFromCm[this.units](value);
        };

        transformDimensionToCm(value) {
            let converterFromCm = {
                m: (value) => {
                    return value / 100;
                },
                cm: (value) => {
                    return value;
                },
                mm: (value) => {
                    return value / 10;
                }
            };

            return converterFromCm[this.units](value);
        };
    };

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
            this.units = super.units;
        };

        changeUnits(unit) {
            this.units = unit;
        };

        get area() {
            if (this.units !== super.units) {
                this.radius = this.transformDimensionFromCm(this.radius);
            };

            return this.radius * this.radius * Math.PI;
        };

        toString() {
            return `${super.toString()} - radius: ${this.radius}`;
        };
    };

    class Rectangle extends Figure {
        constructor(width, height, dimension) {
            super(dimension);
            this.units = dimension;
            this.width = width;
            this.height = height;
        };

        changeUnits(unit) {
            this.units = unit;
        };

        get area() {
            if (this.units !== super.units) {
                this.width = this.transformDimensionFromCm(this.width);
                this.height = this.transformDimensionFromCm(this.height);
            };

            return this.width * this.height;
        };
        toString() {
            return `${super.toString()} - width: ${this.width}, height: ${this.height}`;
        };
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
};

let figures = classSolution();
let c = new figures.Circle(5);

console.log(c.area);
// 78.53981633974483

c.changeUnits('m');

console.log(c.area);
// 0.007853981633974483

c.changeUnits('mm');

console.log(c.area);
// 0.7853981633974483

console.log(c.toString())
    // Figures units: mm Area: 78.53981633974483 - radius: 5
