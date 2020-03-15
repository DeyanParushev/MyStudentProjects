function getBMS(name, inputAge, inputWeight, inputHeight){
    let person = {
        name: name,
        personalInfo: {
            age: inputAge,
            weight: inputWeight,
            height: inputHeight
        },
        BMI: Math.round(inputWeight / (inputHeight/100 * inputHeight/100)),
        
        status: '',
        recommendation: undefined
    }

    function setStatus(obj){
        if(obj.BMI > 0 && obj.BMI < 18.5){
           obj.status = 'underweight';
        }else if(obj.BMI >= 18.5 && obj.BMI < 25){
            obj.status = 'normal';
        }else if(obj.BMI >= 25 && obj.BMI < 30){
            obj.status = 'overweight';
        }else{
            obj.status = 'obese';
        }
    }
    
    setStatus(person);

    if(person.status === 'obese'){
        let obesePerson = person;
        obesePerson['recommendation'] = 'admission required';
        return obesePerson;
    }

    return person;
}

console.log(getBMS("Honey Boo Boo", 9, 57, 137));

// {
//     name: 'Honey Boo Boo',
//     personalInfo: { age: 9, weight: 57, height: 137 },
//     BMI: 30,
//     status: 'obese',
//     recommendation: 'admission required'
//  }
