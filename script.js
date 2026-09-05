const items = [
  { name: "Headphone", price: 3000, discountPercent: 10 },
  { name: "Smart Watch", price: 5000, discountPercent: 0 },
  { name: "Keyboard", price: 2000, discountPercent: 20 }
];
items.map((item)=>{
    let actualNumber = (item.price * item.discountPercent) / 100
    let realPrice = item.price - actualNumber;
    if(item.discountPercent > 0){
console.log(`${item.name}. Final Price : ${realPrice} (${item.discountPercent} % OFF)`);
    }else{
        console.log(`${item.name}. Final Price : ${realPrice} Tk `);
    }
})

