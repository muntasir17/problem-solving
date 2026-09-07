let totalQuantity = 0
const cart = [
  { name: "T-Shirt", price: 300, quantity: 2 },
  { name: "Jeans", price: 800, quantity: 1 },
  { name: "Socks", price: 50, quantity: 3 }
];
cart.forEach((item)=>{
  totalQuantity += item.quantity
})
console.log(totalQuantity);



