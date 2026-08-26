
const customers = [
  { name: "Rahim", spent: 1500, isVerified: true },
  { name: "Karim", spent: 800, isVerified: true },
  { name: "Sakib", spent: 2000, isVerified: false },
  { name: "Tamim", spent: 1200, isVerified: true }
];
customers.filter((custo)=>{
    if(custo.isVerified === true && custo.spent >= 1000){
        console.log(custo.name);
    }
})
//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.