const cart = [
  { name: "Laptop Bag", price: 1500, quantity: 2 },
  { name: "Mouse Pad", price: 300, quantity: 3 },
  { name: "Water Bottle", price: 250, quantity: 1 }
];
let arr = []
cart.forEach((item)=>{
arr.push({name : item.name , subtotal : item.price * item.quantity})
})
console.log(arr);






