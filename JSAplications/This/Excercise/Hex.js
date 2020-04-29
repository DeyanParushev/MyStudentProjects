class Hex {
    constructor(num) {
        this._value = num;
    };

    valueOf(){
        return this._value;
    };

    toString(){
        return '0x' + this._value.toString(16).toUpperCase();
    };

    plus(x){
        if(typeof(x) === 'number'){
            return '0x' + (this._value + x).toString(16).toUpperCase();
        } else{
            let xToNum = parseInt(x, 16);
            return '0x' + (this._value + xToNum).toString(16).toUpperCase();
        };
    };

    minus(x){
        if(typeof(x) === 'number'){
            return '0x' + (this._value - x).toString(16).toUpperCase();
        } else{
            let xToNum = parseInt(x, 16);
            return '0x' + (this._value - xToNum).toString(16).toUpperCase();
        };
    };

    parse(x){
        return parseInt(x, 16);
    };
};

let ff = new Hex(-256);
