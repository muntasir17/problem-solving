//নিচে একটি ই-কমার্স শপের অর্ডারের লিস্ট দেওয়া আছে। তোমার কাজ হলো—যেসব অর্ডার সাকসেসফুলি পেইড হয়েছে (isPaid === true), সেগুলোর মোট টাকার পরিমাণ (amount) যোগ করে কনসোলে প্রিন্ট করা।

const orders = [
  { id: 101, amount: 1200, isPaid: true },
  { id: 102, amount: 800, isPaid: false },
  { id: 103, amount: 2500, isPaid: true },
  { id: 104, amount: 450, isPaid: false }
];
let sum = 0;
orders.filter((item)=>{
if(item.isPaid === true){
    let totalBil = item.amount;
    sum += totalBil
}
})
console.log(`Total Paid Amount: ${sum}`);










//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.