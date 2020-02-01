function solve(str){
    let week ={
        'Monday' : 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday':5,
        'Saturday': 6,
        'Sunday': 7
    }

    if(week[str] == undefined){
        console.log('error');
    }
    else{
        console.log(week[str]);
    }
}

solve('Monday');
