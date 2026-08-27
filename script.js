
const attendees = [
  { name: "Tanvir", age: 22, hasTicket: true },
  { name: "Nayeem", age: 16, hasTicket: true },
  { name: "Fahim", age: 25, hasTicket: false },
  { name: "Siam", age: 20, hasTicket: true }
];

attendees.filter((student)=>{
    if(student.age >= 18 && student.hasTicket === true){
        console.log(student.name);
    }
})





//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 

