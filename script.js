const inventory = [
  { name: "Keyboard", stock: 12 },
  { name: "Mouse", stock: 3 },
  { name: "Monitor", stock: 2 },
  { name: "Headphone", stock: 8 }
];
let arr = []
inventory.forEach((item)=>{
  if(item.stock < 5){
arr.push(item.name)
  }
})
console.log(arr);



