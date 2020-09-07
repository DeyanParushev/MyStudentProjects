function solve(args){
    let speedLimits = {
        'residential' : 20,
        'city' : 50,
        'interstate' : 90,
        'motorway' : 130,
    }

    let speedOverLimit = args[0] - speedLimits[args[1]];
    let message;
    if(speedOverLimit <= 20 && speedOverLimit > 0){
        message = 'speeding';
    }else if(speedOverLimit <= 40 && speedOverLimit > 20){
        message = 'excessive speeding';
    }
    else if(speedOverLimit > 40){
        message = 'reckless driving';
    }else{
        message = '';
    }

    return message;
}

console.log(solve([40, 'city']));
