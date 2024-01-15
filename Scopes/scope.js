let a = 20;
const b = 20;
var c = 30;
var c = 40; 
 // var  give no error
 // let a =30;  error
 // const b = 20;  give error;
const arr = [1, 3, 5, 5, 7];

console.log(a);
console.log(b);
console.log(c);
// {}  // block
 
{
    let a = 10;
    const b = 20;
    var c = 300; 
    
console.log("inner",a);
console.log("inner",b);
console.log("inner",c);           // var does not have block scope
}


console.log(a);
console.log(b);
console.log(c);