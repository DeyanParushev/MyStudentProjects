class Rat {
    constructor(name){
        this.name = name;
        this.ratArray = [];
    };

    getRats(){
        return this.ratArray;
    };

    unite(otherRat){
        if(otherRat instanceof Rat){
            this.ratArray.push(otherRat);
        };
    };

    toString(){
        let ratCollection = '';

        ratCollection += this.name ;

        this.ratArray.forEach(rat => {
            ratCollection += '\n##' + `${rat.name}`;
        });

        return ratCollection;
    };
};

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]
