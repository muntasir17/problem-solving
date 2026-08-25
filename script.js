//নেক্সট টাস্ক: পাস করা শিক্ষার্থীদের নাম বের করা
const students = [
  { name: "Rahim", marks: 75 },
  { name: "Karim", marks: 32 },
  { name: "Sakib", marks: 88 },
  { name: "Tamim", marks: 39 },
  { name: "Riyad", marks: 60 }
];

students.map((mark)=>{
    if(mark.marks >= 40){
        console.log(mark.name);
    }
})
// ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 


