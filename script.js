//লো-স্টক আইটেমগুলোর নাম বের করা

const inventory = [
  { name: "Notebook", stock: 15 },
  { name: "Pen", stock: 3 },
  { name: "Pencil", stock: 2 },
  { name: "Eraser", stock: 20 },
  { name: "Scale", stock: 4 }
];
inventory.filter((item)=>{
    if(item.stock <= 5){
        console.log(item.name);
    }
})

//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.