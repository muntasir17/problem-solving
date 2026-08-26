//নিচে কিছু ভিডিওর তালিকা দেওয়া আছে। তোমার কাজ হলো—যেসব ভিডিও দেখা শেষ হয়েছে (isCompleted === true), সেগুলোর মোট সময় (durationMinutes) যোগ করে কনসোলে প্রিন্ট করা।
const videos = [
  { title: "JS Basics", durationMinutes: 15, isCompleted: true },
  { title: "HTML Forms", durationMinutes: 10, isCompleted: false },
  { title: "CSS Flexbox", durationMinutes: 25, isCompleted: true },
  { title: "Git Basics", durationMinutes: 20, isCompleted: false }
];

let totalTime = 0;
videos.filter((video) =>{
    if(video.isCompleted === true){
        totalTime += video.durationMinutes;
    }
})
console.log(`Total Completed Watch Time: ${totalTime}`);







//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.