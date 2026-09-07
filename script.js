const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Laptop", category: "Electronics" },
  { name: "Pants", category: "Clothing" },
  { name: "Mobile", category: "Electronics" },
  { name: "Book", category: "Stationery" }
];
let arr = [];
products.forEach((item)=>{
if(!arr.includes(item.category)){
  arr.push(item.category)
}
})
console.log(arr);



