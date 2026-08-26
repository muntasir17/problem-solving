//নিচে কিছু কোর্সের নামের তালিকা দেওয়া আছে। তোমার কাজ হলো—যেসব কোর্সের দাম ১,০০০ টাকা থেকে ৪,০০০ টাকার মধ্যে (price >= 1000 এবং price <= 4000), সেগুলোর টাইটেল (title) কনসোলে প্রিন্ট করা

const courses = [
  { title: "HTML & CSS", price: 500 },
  { title: "JavaScript", price: 1500 },
  { title: "React JS", price: 3500 },
  { title: "Data Science", price: 8000 }
];

courses.filter((course)=>{
    if(course.price >= 1000 && course.price <= 4000){
        console.log(course.title);
    }
})
//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.