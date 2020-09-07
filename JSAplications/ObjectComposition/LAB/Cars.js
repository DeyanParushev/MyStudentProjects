function solve(inputArr) {
    function commandExecutor() {
        let objectHolder = [];

        function create(args) {
            let obj = {
                name: args[0]
            }
            objectHolder.push(obj)
        };

        function inherits(args) {
            let parent = objectHolder.filter(x => x.name === args[2])[0];
            let newObj = Object.create(parent);
            newObj['name'] = args[0];
            objectHolder.push(newObj);
        };

        function set(args) {
            let obj = objectHolder.filter(x => x.name === args[0])[0];
            obj[args[1]] = args[2];
        };

        function print(args) {
            let obj = objectHolder.filter(x => x.name === args[0])[0];
            let output = [];

            function reg(object) {
                if (object.__proto__ !== null) {
                    let father = object['__proto__'];
                    Object.keys(father).map(x => {
                        if (x !== 'name') {
                            output.push(`${x}:${obj[x]}`);
                        };
                    });
                    reg(father);
                }
            };

            reg(obj);

            console.log(output.join(', '));
        };

        return {
            create,
            inherits,
            set,
            print
        };
    };

    let executor = commandExecutor();

    inputArr.map(x => {
        let arr = x.split(' ');
        let command = arr[0];
        arr.shift();

        if (arr.includes('inherit')) {
            executor.inherits(arr);
        } else {
            executor[command](arr);
        }
    });
};

solve(['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2']);
solve(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat'])
