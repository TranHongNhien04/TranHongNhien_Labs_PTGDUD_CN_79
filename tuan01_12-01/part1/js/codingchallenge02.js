var bmi = (mass, height) =>{
    return mass/(height**2);
}

var compareBmi = (bmiMark, bmiJohn) =>{
    if(bmiMark > bmiJohn)
        console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's BMI (${bmiJohn.toFixed(2)})`);
    else
        console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Mark's BMI (${bmiMark.toFixed(2)})`);
}

//test data
const bmiMark1 = bmi(78, 1.69);
const bmiJohn1 = bmi(92, 1.95);
compareBmi(bmiMark1, bmiJohn1);