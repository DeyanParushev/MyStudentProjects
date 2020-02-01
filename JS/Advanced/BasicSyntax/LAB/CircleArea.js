function solve(argument){
    
    if(typeof(argument) === 'number'){

        console.log(`${(Math.pow(Number(argument), 2) * Math.PI).toFixed(2)}`);
    }else{
    
        console.log(`We can not calculate the circle area, because we receive a ${typeof(argument)}.`);
    }
}

solve('ivan');
solve(5);
