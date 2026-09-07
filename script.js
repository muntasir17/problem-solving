const cart = [
  { name: "Mouse", price: 500, inStock: true },
  { name: "Keyboard", price: 1500, inStock: true },
  { name: "Monitor", price: 12000, inStock: false }
];
cart.forEach((item)=>{
  if(item.inStock === true){
    console.log(`Order Ready!`);
  }else{
    console.log(`Cannot Place Order: Out of Stock Items Present!`);
  }
})





