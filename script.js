
let sum = 0;
const members = [
  { name: "Shafiq", points: 150, isActive: true },
  { name: "Rafiq", points: 200, isActive: false },
  { name: "Habib", points: 300, isActive: true },
  { name: "Jamil", points: 50, isActive: false }
];

members.filter((member)=>{
    if(member.isActive === true){
        sum += member.points
    }
})
console.log(`Total Active Points: ${sum}`);





//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 

