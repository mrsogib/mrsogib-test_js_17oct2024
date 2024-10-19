// Singleton
// Object.create

// object literals
const mySym = Symbol();
const jsUser = {
    full_name : "Mr Khan",
    emailId : "mrkhan@yahoo.com",
    age : 25,
    location : "Jashore, Bangladesh",
    isLoggedIn : false,
    lastLogin : [ 3, 12 ],
    [mySym] : "id",
}
Object.freeze(jsUser)

// console.log(jsUser.emailId); // not future proof
// console.log(jsUser["emailId"]); // Good Practice 
// console.log(jsUser[mySym]); 


const jsUser2 = {
    [mySym] : "id"
}

console.log(jsUser[mySym] == jsUser2[mySym]);
console.log(jsUser[mySym] === jsUser2[mySym]);
a = "aaa";
b = a;
c = "aaa";
console.log(a===b);
console.log(a===c);


