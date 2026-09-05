const flashSaleItem = {
  productName: "Wireless Earbuds",
  originalPrice: 2000,
  flashDiscountPercent: 30,
  stockAvailable: 5,
  userQuantity: 2,
  isFlashSaleLive: true
};
if(flashSaleItem.userQuantity > flashSaleItem.stockAvailable){
  console.log(`Order Failed: Only ${flashSaleItem.stockAvailable} items left in stock!`);
}else if(flashSaleItem.userQuantity > 2){
  console.log(`Order Failed: Flash Sale limit is max 2 units per customer!`);
}else {
  if(flashSaleItem.isFlashSaleLive === true){
    let result = (flashSaleItem.originalPrice * flashSaleItem.flashDiscountPercent) / 100;
    let finalPrice = flashSaleItem.originalPrice - result;
    console.log("Price : " + finalPrice  + " TK");
  }else{
    console.log("Price : " + flashSaleItem.originalPrice + "TK") ;
  }
}
// aita perfectly kaj kortece jokon ami stock and userquantity change korchi. and jokon aigula abr ager moto rhaksi mane 3,4 e tokon tomar dewa output mane result oitai astechilo. amr ai code ta perfectly hoise bhai aita tumi ossikar korte parb nah i guess. 