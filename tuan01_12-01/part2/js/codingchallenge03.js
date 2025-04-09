var calcBMI = (person) =>{
    return person.mass/(person.height**2);
}

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95
}

//tính bmi và thêm vào mark, john
mark.bmi = calcBMI(mark);
john.bmi = calcBMI(john);

var compareBMI = (person1, person2) =>{
    if(person1.bmi > person2.bmi)
        console.log(`${person1.fullName}'s BMI (${person1.bmi.toFixed(1)}) is higher than ${person2.fullName}'s BMI (${person2.bmi.toFixed(1)})`);
    else
        console.log(`${person2.fullName}'s BMI (${person2.bmi.toFixed(1)}) is higher than ${person1.fullName}'s BMI (${person1.bmi.toFixed(1)})`)
}

//test data
compareBMI(mark, john);