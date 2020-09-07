function solve(arg) {
    let lastNumber = arg % 10;

    let strArr = String(arg);
    let sameDiggits = true;
    let sum = 0;

    for (let index = 0; index < strArr.length; index++) {
        
        if(Number(strArr[index]) !== lastNumber){
            sameDiggits = false;
        }
        
        sum += Number(strArr[index]);
    }

    console.log(sameDiggits);
    console.log(sum);
}

solve(22222);
//true
//10
