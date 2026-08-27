const books = [
  { title: "The Alchemist", pages: 208, isRead: true },
  { title: "Atomic Habits", pages: 320, isRead: false },
  { title: "Deep Work", pages: 304, isRead: true },
  { title: "War and Peace", pages: 1225, isRead: true }
];
books.filter((book)=>{
    if(book.isRead === true && book.pages >= 300){
        console.log(book.title);
        
    }
})

//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 

