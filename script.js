
// total user number bair kora 
const users = [
  { name: "Arian", isActive: true },
  { name: "Siam", isActive: false },
  { name: "Nayeem", isActive: true },
  { name: "Fahim", isActive: true },
  { name: "Tanvir", isActive: false }
];
let count = 0;
users.map((user)=>{
    if(user.isActive === true){
        count++;
    }
})
console.log("Total Active Users : " + count);

// ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 


