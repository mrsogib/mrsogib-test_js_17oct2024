let name1 = "mizan" 
let name2 = name1 // copy of name1 memory value
console.table([name1, name2]);
name2 = "rahman"
console.table([name1, name2]);


let user1 = {
    'name' : "mizan",
    "id" : 7
 }
let user2 = user1 // reference to user1 heap memory, not just value
console.table([user1,user2]);
user2.name = "ali"
console.table([user1,user2]);