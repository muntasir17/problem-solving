const products = [
  { id: 101, name: "Smart Phone", price: 15000 },
  { id: 102, name: "Laptop", price: 65000 },
  { id: 103, name: "Smart Watch", price: 3500 }
];

const targetId = 102;
products.forEach((item)=>{
  if(item.id === targetId){
    console.log(`{ id : ${item.id}, name : ${item.name}, price: ${item.price} }`);
  }
})
