const articles = [
  { id: 1, title: "Learn JavaScript ES6", category: "Programming" },
  { id: 2, title: "Mastering React Hooks", category: "Frontend" },
  { id: 3, title: "JavaScript Array Methods", category: "Programming" },
  { id: 4, title: "Tailwind CSS Tutorial", category: "Design" }
];
let arr = []
const searchQuery = "javascript";
let boroWord = searchQuery.toUpperCase()
console.log(boroWord);

articles.map((item)=>{
  let titelWord = item.title.toUpperCase();
  if(titelWord.includes(boroWord)){
    arr.push(item.title)
  }
})
console.log(arr);


