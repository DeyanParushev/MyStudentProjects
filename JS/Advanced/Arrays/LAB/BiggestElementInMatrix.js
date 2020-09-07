maxNumber = Number.MIN_SAFE_INTEGER;

    input.forEach(element => {
        element.forEach(x => {
            if(x > maxNumber){
                maxNumber = x;
            }
        });
    });

    console.log(maxNumber);
}

solve([[20, 50, 10],
    [8, 33, 145]]
   );
   
// 145
