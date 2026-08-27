
const rooms = [
  { roomNo: "101", price: 2000, type: "Deluxe", isAvailable: true },
  { roomNo: "102", price: 1500, type: "Standard", isAvailable: true },
  { roomNo: "103", price: 2500, type: "Deluxe", isAvailable: false },
  { roomNo: "104", price: 3000, type: "Deluxe", isAvailable: true }
];
rooms.filter((room)=>{
    if(room.type === "Deluxe" && room.isAvailable === true){
let discount = (room.price * 20) / 100;
let actualPrice = room.price - discount;
console.log(`${room.roomNo} - Discounted Price : ${actualPrice}`);
    }
})
//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 

