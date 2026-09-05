const customer = {
  name: "Sumi",
  totalSpent: 25000,
  ordersCount: 6,
  currentPurchase: 5000
};
console.log(`Customer : ${customer.name}`);

if(customer.totalSpent >= 50000 || customer.ordersCount >= 10){
console.log(`Loyalty Rank: VIP`);
}else if(customer.totalSpent >= 20000 && customer.ordersCount >= 5){
console.log(`Loyalty Rank: Gold 🥇`);
}else if(customer.totalSpent >= 5000){
  console.log(`Loyalty Rank: Silver`);
}else{
    console.log(`Loyalty Rank: Bronze`);
}
console.log(`Customer : ${customer.currentPurchase}`);
let points = (customer.currentPurchase / 100) * 2;
console.log(`Earned Points: ${points} Points (Double Bonus Applied!)`);

// bro aita teo matha khataite hoise that means aitao akta bhalo level er problem silo and ami asa korbo tumi aitao 100% parchi ai bheve dhore niba. and amk next problem diba. 
