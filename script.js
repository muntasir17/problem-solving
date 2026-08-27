const players = [
  { name: "HeroX", score: 500, level: 12, isOnline: true },
  { name: "Shadow", score: 300, level: 8, isOnline: true },
  { name: "Viper", score: 700, level: 15, isOnline: false },
  { name: "Blaze", score: 450, level: 10, isOnline: true }
];

let sum = 0;
players.filter((player)=>{
if(player.isOnline === true && player.level >= 10){
    sum += player.score;
}
})
console.log(`Total Top Player Score: ${sum}`);
//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 

