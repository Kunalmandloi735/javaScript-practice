 const mySym = Symbol("key1")

 const myObj = {
    name: "Ram",
    age: 18,
    [mySym]:"mykey1", // symbol
    height: "5ft",
    location:"Ayodhya",
    email: "ram2@gmail.com",
    1:200,
 }

 myObj.email = "ram3@gmail.com";

 //Object.freeze(myObj); // freeze the object
//  console.log(myObj.name);
 //console.log(myObj.email);

// console.log(myObj["email"]);
// console.log(typeof myObj['1']);

myObj.greeting = function(){
    console.log("hare Krishna Hare Krishna");
}

myObj.greetingTwo = function(){
    console.log(`Hare Krishna , ${this.name}`);
}
console.log(myObj.greeting());
console.log(myObj.greetingTwo());