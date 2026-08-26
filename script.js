
//নিচে কিছু প্রোডাক্টের তালিকা দেওয়া আছে। তোমার কাজ হলো—যেসব প্রোডাক্টের রেটিং ৪.০ বা তার বেশি (rating >= 4.0), সেগুলোর নাম এবং ১০% ডিসকাউন্ট দেওয়ার পর নতুন দাম কত হবে (price - (price * 0.10)), তা কনসোলে প্রিন্ট করা।
const items = [
  { name: "Shoes", price: 1000, rating: 4.5 },
  { name: "Jacket", price: 2000, rating: 3.8 },
  { name: "Watch", price: 1500, rating: 4.2 }
];
items.filter((item) =>{
if(item.rating >= 4.0){
    let relaPrice = (item.price * 10) / 100;
    let actualPrice = item.price - relaPrice;
    console.log(`${item.name} - Discounted Price: ${actualPrice}`);
}
})
//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.