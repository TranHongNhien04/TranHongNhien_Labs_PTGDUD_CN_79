const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players:[ [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski'
    ],
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze'
    ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25, 
        team2: 6.5
    },
}

//1. Lặp qua scored, in tên từng bàn thắng tương ứng với tên cầu thủ
game.scored.forEach((player, index) => {
    console.log(`Goal ${index +1}: ${player}`);
});
//2. Tính tỉ lệ cược trung bình, dùng vòng lặp
let total = 0;
Object.values(game.odds).forEach(odd => {
    total += odd;
});
console.log(`The average odds are ${(total/Object.values(game.odds).length).toFixed(2)}`);
/* cách code khác 
const odds = Object.values(game.odds);
const avgOdds = (odds.reduce((total, odd) =>
                total + odd, 0) / odds.length).toFixed(2);
console.log(`The average odds are ${avgOdds}`);
*/
//3. in 3 tỉ lệ cược 
for(const [team, odd] of Object.entries(game.odds)){
    const teamName = team === 'x' ? 'draw' : `vitory ${game[team]}`;
    console.log(`Odd of ${teamName}: ${odd}`);
}
//4. tạo scorers
const scorers = {};
for(const player of game.scored){
    scorers[player] = (scorers[player] || 0) +1;
}
console.log(scorers);
 