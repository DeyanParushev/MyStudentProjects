function classSolution() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        };
    };

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight)
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            };
        };

        get ribbon() {
            return this._ribbon;
        };
    };

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        };

        get text() {
            return this._text;
        };
    };

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    };
};

function funcSolution() {
    function Balloon(color, gasWeight) {
        this.color = color;
        this.gasWeight = gasWeight;
    };

    function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
        Balloon.call(this, color, gasWeight);
        this.ribbon = {
            color: ribbonColor,
            length: ribbonLength
        };
    };

    PartyBalloon.prototype = Object.create(new Balloon());

    function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLength, text) {
        PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLength);
        this.text = text;
    };

    BirthdayBalloon.prototype = Object.create(new PartyBalloon());

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    };
};

let loons = funcSolution();

let b = new loons.Balloon('red', 5);
let p = new loons.PartyBalloon('red', 5, 'pink', 10);
let bd = new loons.BirthdayBalloon('red', 5, 'pink', 10, 'hapyBday');

console.log(Object.getPrototypeOf(bd) === Object.getPrototypeOf(p));
// false

console.log(Object.getPrototypeOf(p));
// Balloon {}

console.log(b);
// Balloon { color: 'red', gasWeight: 5 }
