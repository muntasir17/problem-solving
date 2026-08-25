
const cart = [
  { item: "Pen", price: 10, quantity: 3 },
  { item: "Notebook", price: 50, quantity: 2 },
  { item: "Eraser", price: 5, quantity: 4 }
];
let sum = 0;
cart.map((cartItem) =>{
let totalPrice = cartItem.price * cartItem.quantity
sum += totalPrice
})
console.log("Total Bill: " + sum);


