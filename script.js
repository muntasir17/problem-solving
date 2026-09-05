const cartItems = [
  { name: "Shirt", price: 100, weightInKg: 0.5 },
  { name: "Shoes", price: 3500, weightInKg: 1.2 },
  { name: "Socks", price: 20, weightInKg: 0.1 }
];
let totalPrice = 0;
let totalWeight = 0
cartItems.map((item)=>{
    totalPrice += item.price;
   totalWeight += item.weightInKg;
})
if(totalPrice >= 4000){
    console.log(`Shipping Fee: 0 Tk (Free Shipping)`);
}else{
   let shippingFee = 80 + (totalWeight * 30);
   totalPrice += shippingFee;
   console.log(`Grand Total: ${totalPrice} Tk`);
}

 console.log(`Total Product Price: ${totalPrice} Tk`);
 console.log(`Total Weight: ${totalWeight} Kg`);





