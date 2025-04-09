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

//1. tạo mảng cầu thủ cho mỗi đội
const [players1, players2] = game.players;
//2. tách cầu thủ thủ môn với các cầu thủ còn lại
const [gk, ...fieldPlayers] = players1;
//3. tạo mảng chứa tất cả cầu thủ của hai đội
const allPlayers =[...players1, ...players2];
//4. đội 1 cộng thêm cầu thủ dự bị
const players1Final = [...players1, 'Thicago', 'Coutinho', 'Perisic'];
//5. lấy tỉ số lưu vào biến
const {team1, draw, team2} = game.odds;
//6. hàm printGoals, nhận số lượng cầu thủ tùy ý, số cầu thủ này là số cầu thủ ghi bàn,
// số lượng cầu thủ = số bàn thắng
const printGoals = (...players) =>{
    console.log(`${players.length} goals were scored by: `);
    players.forEach(player => {
         console.log(player);
    });
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
//7. so sánh tỉ số của 2 đội, in ra thông báo đội thắng, đề yêu cầu không if/else và toán tử 3 ngôi
// var guessTheWinner = (team1, team2) =>{
//     return team1 < team2? console.log(`Bayern Munich is more likely to win`)
//                         : console.log(`Borrussia Dortmund is more likely to win`);
// }
team1 < team2 && console.log(`Bayern Munich is more likely to win`);
team1 > team2 && console.log(`Borrussia Dortmund is more likely to win`);