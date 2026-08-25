//নেক্সট টাস্ক: ইঞ্জিনিয়ারিং ডিপার্টমেন্টের মোট স্যালারি বের করা
const employees = [
  { name: "Siddik", department: "Engineering", salary: 50000 },
  { name: "Rahim", department: "HR", salary: 35000 },
  { name: "Tanvir", department: "Engineering", salary: 60000 },
  { name: "Anik", department: "Marketing", salary: 40000 }
];
let sum = 0;
employees.filter((item)=>{
if(item.department === "Engineering"){
    sum += item.salary
}
})
console.log(`Total Engineering Salary : ${sum}`);
// ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 


