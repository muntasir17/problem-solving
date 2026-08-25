//নিচে একটি প্রোডাক্ট ইনভেন্টরির অ্যারে দেওয়া আছে। তোমার কাজ হলো—যেসব প্রোডাক্ট স্টকে আছে (stock > 0), শুধু সেগুলোর নাম (name) কনসোলে প্রিন্ট করা।

const inventory = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 12 },
  { name: "Monitor", stock: 0 },
  { name: "Headphone", stock: 8 }
];
inventory.map((item)=>{
if(item.stock > 0){
console.log(item.name);
}
})
// ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 