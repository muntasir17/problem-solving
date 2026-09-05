const user = { name: "Anik", role: "editor" };

const menuItems = [
  { title: "Dashboard", allowedRoles: ["admin", "editor", "user"] },
  { title: "User Management", allowedRoles: ["admin"] },
  { title: "Content Editor", allowedRoles: ["admin", "editor"] },
  { title: "System Settings", allowedRoles: ["admin"] },
  { title: "My Profile", allowedRoles: ["admin", "editor", "user"] }
];
console.log(`Accessible Menus for ${user.name} (${user.role}):`);
menuItems.map((item)=>{
if(item.allowedRoles.includes(user.role) ){
    console.log(`- ${item.title}`);
}
})





