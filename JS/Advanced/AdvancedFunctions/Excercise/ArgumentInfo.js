function getArgumentsInfo(...args) {
    let argumentsAndValues = {};
    let argumentTypesAndCount = {}
    args.map((x) => {
        argumentsAndValues[`${typeof (x)}`] = x;
        
            if (!(typeof [x] in argumentTypesAndCount)) {
                if(x === undefined){
                    argumentTypesAndCount['undefined'] = 0;
                }
                argumentTypesAndCount[`${typeof (x)}`] = 1;
            } else {
                if(x === undefined){
                    argumentTypesAndCount['undefined'] = 0;
                }
                    argumentTypesAndCount[`${typeof (x)}`] += 1;
            }
    })
    Object.keys(argumentsAndValues).map((x) => console.log(`${x}: ${argumentsAndValues[x]}`));
    Object.keys(argumentTypesAndCount).map((x) => console.log(`${x} = ${argumentTypesAndCount[x]}`));
}

//getArgumentsInfo('cat', 42, function () { console.log('Hello world!'); });
getArgumentsInfo(42, 'cat', [], undefined);
