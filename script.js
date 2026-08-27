
const subscriptions = [
  { user: "Nayeem", plan: "Premium", price: 500, isActive: true },
  { user: "Fahim", plan: "Basic", price: 200, isActive: true },
  { user: "Siam", plan: "Premium", price: 500, isActive: false },
  { user: "Tanvir", plan: "Premium", price: 500, isActive: true }
];
let sum = 0;
subscriptions.filter((user)=>{
    if(user.isActive === true && user.plan === "Premium"){
        sum += user.price
    }
})
console.log(`Total Premium Revenue: ${sum}`);
//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 

