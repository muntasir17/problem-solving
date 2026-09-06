const cart = [
  { name: "T-Shirt", price: 300, quantity: 2 },
  { name: "Jeans", price: 800, quantity: 1 },
  { name: "Socks", price: 50, quantity: 4 }
];
let sum = 0;
let discountPrice;
cart.map((item)=>{
let result = item.price * item.quantity;
sum += result;
let discount = (sum * 10) / 100;
discountPrice = sum - discount;
})
console.log(discountPrice);



