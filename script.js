const checkoutData = {
  cartSubtotal: 3200,
  couponCode: "SAVE20",
  userBalance: 3000
};
console.log(`Checkout Details:`);
console.log(`- Subtotal: ${checkoutData.cartSubtotal} Tk`);

if(checkoutData.couponCode === "SAVE20"){
let result = (checkoutData.cartSubtotal * 20) / 100;
let finalPrice = checkoutData.cartSubtotal - result;
console.log(`- Discount : ${result} Tk (${checkoutData.couponCode} applied)`);
if(checkoutData.userBalance >= finalPrice){
  console.log(`- Payment Status: Order Placed Successfully! ✅`);
}
let remainingBalance = checkoutData.userBalance - finalPrice;
console.log(`- Remaining Wallet Balance: ${remainingBalance} Tk`);
}
// aikhane ami - Shipping Fee: 0 Tk (Free Shipping) chara baki sob concept ami milay felsi asa kori. and aita oto important mone hocce nah. ami asol logic milay felsi and aita amr jonno enough ajke ato problem solve korlam ato happy ami every problem e ami onk kicu shiklam. thank you tomake amk airokom problem dewar jonno. amk ki arekta problem dewa jabe. 










