
const users = [
  { name: "Rahim", role: "admin", isActive: true },
  { name: "Karim", role: "user", isActive: true },
  { name: "Tanvir", role: "admin", isActive: false },
  { name: "Sumi", role: "admin", isActive: true }
];
let arr = [];
users.map((user)=>{
    if(user.isActive === true && user.role === "admin"){
       arr.push(user.name)
    }
})
console.log(arr);






