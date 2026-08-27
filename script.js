
const products = [
  { name: "Laptop", category: "Electronics", inStock: true },
  { name: "Shirt", category: "Clothing", inStock: true },
  { name: "Headphones", category: "Electronics", inStock: false },
  { name: "Smartphone", category: "Electronics", inStock: true }
];

products.filter((item)=>{
    if(item.inStock === true && item.category === "Electronics"){
        console.log(item.name);
    }
})

//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 

