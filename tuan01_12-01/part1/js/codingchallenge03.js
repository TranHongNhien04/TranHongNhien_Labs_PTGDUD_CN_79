var calcAverage = (score1, score2, score3) =>{
    return (score1 + score2 + score3)/3;
}

const checkWinner = (avgDolphins, avgKoalas) =>{
    if(avgDolphins>=100 || avgKoalas >=100){
        if(avgDolphins > avgKoalas && avgDolphins>=100){
            console.log(`Dolphins win the trophy with an average score of ${avgDolphins.toFixed(2)}`);
        }else if(avgKoalas > avgDolphins && avgKoalas>=100){
            console.log(`Koalas win the trophy with an average score of ${avgKoalas.toFixed(2)}`);
        }else if(avgDolphins === avgKoalas && avgDolphins >=100 && avgKoalas>=100){
            console.log(`It's a draw! Both teams have an average score of ${avgDolphins.toFixed(2)}`);
        }
    }else{
        console.log('No team wins the trophy because both teams scored below 100');
    }
}

//test data1
const avgDolphins1 = calcAverage(96, 108, 89);
const avgKoalas1 = calcAverage(88, 91, 110);
checkWinner(avgDolphins1, avgKoalas1);

//test data bonus 1
const avgDolphins2 = calcAverage(97, 112, 101);
const avgKoalas2 = calcAverage(109, 95, 123);
checkWinner(avgDolphins2, avgKoalas2);

//test data bonus 2
const avgDolphins3 = calcAverage(97, 112, 101);
const avgKoalas3 = calcAverage(109, 95, 106);
checkWinner(avgDolphins3, avgKoalas3);