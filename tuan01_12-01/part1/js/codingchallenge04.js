var calcTip = bill => {
   return (bill>=50 && bill<=300)? bill*0.15 : bill*0.2;
}

var printResult = (bill) => {
    console.log(`The bill was ${bill}, the tip was ${calcTip(bill)}, and the total value ${bill + calcTip(bill)}`);
}

//test data1
printResult(275);