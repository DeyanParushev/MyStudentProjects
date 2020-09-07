class List {
    constructor() {
        this.innerList = [];
        this.size = 0;
    };

    add(value) {
        this.innerList
            .push(value);

        this.innerList.sort((a, b) => {
            return a - b;
        });
        this.size++;
    };

    remove(index) {
        if (index >= 0 && index < this.innerList.length) {
            this.size = this.innerList.length - 1;
            return this.innerList
                .splice(index, 1)
                .sort((a, b) => a - b);

        };
    };

    get(index) {
        if (index >= 0 && index < this.innerList.length) {
            return this.innerList[index];
        }
    };
};


let list = new List();
list.add(2);

console.log(list.size);
//1
