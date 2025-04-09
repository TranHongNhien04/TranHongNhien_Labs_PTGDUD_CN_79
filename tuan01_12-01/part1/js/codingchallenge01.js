//hàm tính bmi
var bmi = (mass, height) => {
    return mass/(height**2);
}

//hàm in kết quả
var compareBmi = (bmiMark, bmiJohn) =>{
    const bmiHigher = bmiMark > bmiJohn;
    console.log(
        bmiHigher?
        `Mark's BMI is higher than John's BMI`:
        `John's BMI is higher than Mark's BMI`
    )
}

//test data 1
const bmiMark1 = bmi(78, 1.69);
const bmiJohn1 = bmi(92, 1.95);
compareBmi(bmiMark1, bmiJohn1);

//test data 1
const bmiMark2 = bmi(95, 1.88);
const bmiJohn2 = bmi(85, 1.76);
compareBmi(bmiMark2, bmiJohn2);