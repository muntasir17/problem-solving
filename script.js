// /নিচে একটি সোশ্যাল মিডিয়া অ্যাকাউন্টের কিছু পোস্টের লিস্ট দেওয়া আছে। তোমার কাজ হলো—যেসব পোস্ট পাবলিক করা আছে (isPublic === true), সেগুলোর মোট লাইকের সংখ্যা (likes) যোগ করে কনসোলে প্রিন্ট করা।


const posts = [
  { title: "My First Day at Gym", likes: 120, isPublic: true },
  { title: "Personal Notes", likes: 50, isPublic: false },
  { title: "JavaScript Tips", likes: 350, isPublic: true },
  { title: "Secret Recipe", likes: 90, isPublic: false }
];

let sum = 0;
posts.filter((post)=>{
    if(post.isPublic === true){
        sum += post.likes;
    }
})
console.log(`Total Public Likes: ${sum}`);

//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.