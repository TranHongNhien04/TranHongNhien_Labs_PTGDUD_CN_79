  var calcAverage = (score1, score2, score3) =>{
    return (score1 + score2 + score3)/3;
  }

  var checkWinner = (avgDolphins, avgKoalas) =>{
    if(avgDolphins >= 2*avgKoalas)
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    else
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  }

  //test data1
  avgDolphins1 = calcAverage(44, 23, 71);
  avgKoalas1 = calcAverage(65, 54, 49);
  checkWinner(avgDolphins1, avgKoalas1);
  //test data2
  avgDolphins2 = calcAverage(85, 54, 41);
  avgKoalas2 = calcAverage(23, 34, 27);
  checkWinner(avgDolphins2, avgKoalas2);