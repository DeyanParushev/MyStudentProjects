class Person{
    constructor(first, last){
        this._firstName = first;
        this._lastName = last;
    };

    get firstName() { return this._firstName; };
    set firstName(x) { return this._firstName = x; }

    get lastName() { return this._lastName; };
    set lastName(x) { return this._lastName = x; }

    get fullName() { return `${this._firstName} ${this._lastName}`; };
    set fullName(x) {
        if(x.split(' ').length === 2){
            this._firstName = x.split(' ')[0];
            this._lastName = x.split(' ')[1];
        }
        return `${this._firstName} ${this._lastName}`;
    };
};
