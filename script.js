const cart = [
  { name: "Shirt", price: 500, inStock: true, quantity: 2 },
  { name: "Pants", price: 1200, inStock: false, quantity: 1 },
  { name: "Jacket", price: 2500, inStock: true, quantity: 1 },
  { name: "Shoes", price: 1500, inStock: true, quantity: 1 }
];
let price = 0;
let quantity = 0;
cart.map((item) =>{
if(item.inStock === true){
   price += item.price
   quantity += item.quantity;
}

})
console.log(`{ totalAmount : ${price}, totalItems : ${quantity} }`);










