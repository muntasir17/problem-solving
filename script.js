//নিচে কিছু শিক্ষার্থীর পরীক্ষার রেজাল্ট দেওয়া আছে। তোমার কাজ হলো—যেসব শিক্ষার্থী পাস করেছে (hasPassed === true), তাদের স্কোরের সাথে ৫ বোনাস পয়েন্ট যোগ করে নাম ও ফাইনাল স্কোর কনসোলে প্রিন্ট করা।
const students = [
  { name: "Rahim", score: 80, hasPassed: true },
  { name: "Karim", score: 45, hasPassed: false },
  { name: "Arian", score: 90, hasPassed: true }
];

students.filter((number)=>{
if(number.hasPassed === true){
    console.log(`${number.name} - Final Score : ${number.score + 5}`);
    
}


})








//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.