
const tasks = [
  { title: "Learn JavaScript", isCompleted: true, priority: "High" },
  { title: "Practice German Vocabulary", isCompleted: false, priority: "High" },
  { title: "Clean Room", isCompleted: false, priority: "Low" },
  { title: "Build Portfolio Project", isCompleted: false, priority: "High" }
];
tasks.filter((item)=>{
if(item.priority === "High" && item.isCompleted === false){
    console.log(item.title);
}
})
// ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba. 


