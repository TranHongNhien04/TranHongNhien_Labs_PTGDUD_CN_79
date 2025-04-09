const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips =[]
const totals =[]

// import { calcTip } from './codingchallenge02.js';

var calcTip = bill =>{
    return (bill>=50 && bill<=300)? bill*0.15 : bill*0.2;
}

for (let i=0; i< bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(`Bills:`, bills);
console.log(`Tips:`, tips);
console.log(`Totals:`, totals);