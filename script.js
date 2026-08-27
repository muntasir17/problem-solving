
let sum = 0;
const shipments = [
  { id: "SHIP1", shippingFee: 120, status: "pending" },
  { id: "SHIP2", shippingFee: 80, status: "delivered" },
  { id: "SHIP3", shippingFee: 150, status: "pending" },
  { id: "SHIP4", shippingFee: 50, status: "cancelled" }
];
shipments.filter((item)=>{
    if(item.status === "pending"){
        sum += item.shippingFee
    }
})
console.log(`Total Pending Shipping Fee: ${sum}`);
//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 

