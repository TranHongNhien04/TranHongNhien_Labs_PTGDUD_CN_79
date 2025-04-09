const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow card']
]);
//1. tạo mảng sự kiện diễn ra, không lặp lại
const events = [...new Set(gameEvents.values())];
console.log(events);
//2. xóa sự kiện thẻ vàng ở phút 64
//gameEvents.delete(64);
console.log(gameEvents);
//3. tính thời gian trung bình có một sự kiện sẽ diễn ra
//lấy số phút chia cho số sự kiện
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${(time/gameEvents.size).toFixed(0)} minutes`);
//4. ghi bàn thắng 
for(const [minute, event] of gameEvents){
    const half = minute <=45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
}