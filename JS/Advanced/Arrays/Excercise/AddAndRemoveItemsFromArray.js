function solve(input){
    let arr = [];
    let commands = {
        add : (arr, item) => arr.push(item),
        remove: (arr, item) => arr.pop()
    }

    let initialNumber = 1;

    input.forEach(command => {
        commands[command](arr, initialNumber);
        initialNumber++;
    });

    if(arr.length < 1){
        console.log('Empty');
    }else{
        console.log(arr.join('\n'));
    }
}
