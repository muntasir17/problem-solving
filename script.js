//নিচে কিছু অনলাইন অর্ডারের তালিকা দেওয়া আছে। তোমার কাজ হলো—যেসব অর্ডারের মোট অ্যামাউন্ট ১,০০০ টাকা বা তার বেশি (totalAmount >= 1000), সেগুলোর ID কনসোলে প্রিন্ট করা।

const orders = [
  { id: "ORD01", totalAmount: 1500 },
  { id: "ORD02", totalAmount: 800 },
  { id: "ORD03", totalAmount: 2200 },
  { id: "ORD04", totalAmount: 450 }
];

orders.filter((item)=>{
    if(item.totalAmount >= 1000){
        console.log(item.id);
        
    }
})









//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.