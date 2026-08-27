
const employees = [
  { name: "Anis", dept: "IT", salary: 50000, isBonusEligible: true },
  { name: "Babul", dept: "HR", salary: 40000, isBonusEligible: true },
  { name: "Champa", dept: "IT", salary: 60000, isBonusEligible: false },
  { name: "Dalia", dept: "IT", salary: 55000, isBonusEligible: true }
];

employees.filter((employe)=>{
if(employe.isBonusEligible === true && employe.dept === "IT"){
console.log(`${employe.name} - Final Salary : ${employe.salary + 5000}`);
}else if(employe.dept === "IT" && employe.isBonusEligible === false){
console.log(`${employe.name} - Final Salary : ${employe.salary }`);
}
})
//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 

