const products = [
  { name: "Wireless Mouse", price: 25, inStock: true, rating: 4.5 },
  { name: "Gaming Keyboard", price: 80, inStock: false, rating: 4.8 },
  { name: "USB Cable", price: 10, inStock: true, rating: 3.8 },
  { name: "Headphones", price: 50, inStock: true, rating: 4.2 }
];
let arr = []
products.forEach((item)=>{
  if(item.inStock === true && item.rating >= 4.0){
    arr.push(item.name)
  }
})
console.log(arr);


