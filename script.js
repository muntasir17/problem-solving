let sum = 0;
const cart = [
  { name: "Laptop Bag", price: 1500, isAvailable: true },
  { name: "USB Cable", price: 250, isAvailable: false },
  { name: "Power Bank", price: 2200, isAvailable: true },
  { name: "Phone Cover", price: 350, isAvailable: true }
];

cart.filter((item)=>{
    if(item.isAvailable === true){
        return sum += item.price
    }
})
console.log(sum);
