//নিচে একটি টিমের মেম্বারদের লিস্ট দেওয়া আছে। তোমার কাজ হলো—যেসব মেম্বারের রোল "Admin" এবং তারা বর্তমানে অ্যাক্টিভও আছে (isActive === true), শুধু সেগুলোর নাম (name) কনসোলে প্রিন্ট করা।
const teamMembers = [
  { name: "Siam", role: "Admin", isActive: true },
  { name: "Rakib", role: "User", isActive: true },
  { name: "Tanvir", role: "Admin", isActive: false },
  { name: "Fahim", role: "Admin", isActive: true }
];
teamMembers.filter((member)=>{
    if(member.role === "Admin" && member.isActive === true){
        console.log(member.name);
    }
})
//ai nao ami bair kore dilam and tomar output gula o bair hoise akn tumi amk bolte parba nah je aita airokom hobe nah onno bhave hobe hen ten aigula amr kaj hocce bair kora aita jairokom bhave hok. jodi amr problem thik hoye thake tahole amk one line e akta verdict diye next problem diba.