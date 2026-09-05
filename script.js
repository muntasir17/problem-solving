const products = [
  { name: "Samsung Galaxy S23", category: "Electronics", price: 70000, inStock: true },
  { name: "iPhone 15 Pro", category: "Electronics", price: 130000, inStock: false },
  { name: "Wireless Mouse", category: "Accessories", price: 1500, inStock: true },
  { name: "Mechanical Keyboard", category: "Accessories", price: 4500, inStock: true },
  { name: "Xiaomi Redmi Note", category: "Electronics", price: 25000, inStock: true }
];
console.log(`Matching Products:`);
products.map((item)=>{
if(item.category === "Electronics" && item.price <= 80000 && item.inStock === true){
console.log(`- ${item.name} (Price: ${item.price} Tk)`);
}
})
// bro guess what i completed all the task and perfectly assigned. akn to ar bolte parba nah amr code e kono bhul ase. aita ami damn sure je 100% hoise. 



