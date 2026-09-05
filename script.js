const orders = [
  { orderId: "ORD-101", amount: 1200, status: "pending" },
  { orderId: "ORD-102", amount: 3500, status: "shipped" },
  { orderId: "ORD-103", amount: 800, status: "delivered" },
  { orderId: "ORD-104", amount: 2100, status: "cancelled" }
];
orders.filter((user)=>{
if(user.status === "pending"){
    console.log(`Order ${user.orderId} (${user.amount} Tk) | Status : Pending ⏳ |Action: [Cancel Order]`);
}else if(user.status === "shipped"){
  console.log(`Order ${user.orderId} (${user.amount} Tk) | Status : Shipped 🚚 |Action: [Track Shipment]`);
}else if(user.status === "delivered"){
  console.log(`Order ${user.orderId} (${user.amount} Tk) | Status : Delivered ✅ |Action: [Write Review]`);
}else{
console.log(`Order ${user.orderId} (${user.amount} Tk) | Status : Cancelled ❌ |Action: [Reorder]`);
}
})