const reviews = [
  { user: "Arik", rating: 5 },
  { user: "Rahim", rating: 4 },
  { user: "Sumi", rating: 5 },
  { user: "Karim", rating: 2 }
];
let sum = 0;
reviews.forEach((item)=>{
  sum += item.rating;
})
let result = sum / 4;
console.log(result);






