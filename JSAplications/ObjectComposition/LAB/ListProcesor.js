function solve(inputArr) {
    function cols() {
        let innerArr = [];

        function add(str) {
            innerArr.push(str);
        };

        function print(str) {
            console.log(innerArr.join(','));
        };

        function remove(str) {
           innerArr = innerArr.filter(x => x !== str);
        };

        return {
            add,
            print,
            remove,
        };
    };

    let obj = cols();

    inputArr.map(x => {
       let inputCommandAndValue = x.split(' ');
       obj[inputCommandAndValue[0]](inputCommandAndValue[1]);
    });
};

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);
