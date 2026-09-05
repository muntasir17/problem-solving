const cart = [
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 3000, quantity: 1 },
  { name: "Monitor", price: 20000, quantity: 2 }
];
let sum = 0;
let total = 0;
console.log(`Cart Summary:`);

cart.map((item)=>{
  let result = item.price * item.quantity;
  total += result
  sum += item.quantity;
})
console.log(`- Subtotal: ${total} Tk`);
console.log(`- Total Items: ${sum}`);

if(total >= 40000){
  let discount = (total * 5) / 100
  console.log(`- Discount: ${discount} Tk (5%)`);
  console.log(`- Final Payable: ${total - discount} Tk`); 
}else{
  console.log(total);
}

if(sum >= 4){
  console.log(`- Reward Status: Free Gift: USB Hub Included! 🎁`);
}else{
  console.log(`No Free Gift Eligible`);
}

// bro aita challenging chilo mane ami finally brain khatai kicu akta banailam and answer tomar moto kore bair korlam and aita te asa kori kono bhul nai ar akto bug thakle oita ami pore giye kaje solve kore felbo but akn kar moto ami parchi aita tomar mante hobe bhai. now ami ki next problem paite pari. 
