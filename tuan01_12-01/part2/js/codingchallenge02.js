var calcTip = bill =>{
    return (bill>=50 && bill<=300)? bill*0.15 : bill*0.2;
}
// export {
//     calcTip
// };

// tạo mảng bill
const bills = [290, 30, 150, 450];
// tạo mảng tip
const tips = bills.map(calcTip);
// tạo tổng
const total = bills.map((bill, index) => bill + tips[index]);
//cách khác
// const total1 = bills.map((bill) => {
//     return bill + calcTip(bill);
// })

console.log(`Bills: `, bills);
console.log(`Tips: `, tips);
console.log(`Total: `, total);

