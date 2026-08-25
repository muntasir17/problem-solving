//নেক্সট টাস্ক: রেটিং ও স্টক অনুযায়ী সেরা বইয়ের নাম বের করা

const books = [
  { title: "The Alchemist", rating: 4.8, inStock: true },
  { title: "Eat That Frog", rating: 4.2, inStock: true },
  { title: "Ikigai", rating: 4.6, inStock: false },
  { title: "Atomic Habits", rating: 4.9, inStock: true }
];

books.filter((item)=>{
if(item.inStock === true && item.rating > 4.5){
    console.log(item.title);
}
})

// ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 


