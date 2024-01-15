// How to Initialize arrays in Js

//const myArr = [0, 1, 4, 4, 5, 6,];
//const myHeroes = ["Hanuman", "Ram", "Balaram"];
//const myArray = new Array(1, 2, 4, 5, 6);

// console.log(myArr[1]);
// console.log(myHeroes[0]);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

//myArr.unshift(9); //add a element in the begining   of the array 
//myArr.shift();  // remove element from begining of array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
//const newArr = myArr.join();


//*****************************************/
// slice and splice;

//const mySlice = myArr.slice(1, 3);

// console.log("A " ,myArr);
// const mySplice = myArr.splice(1, 3);


// console.log(mySlice);
// console.log("B", myArr);
// console.log(myArr);
// console.log("c", myArr);
// console.log(mySplice);


// ******** splice method change the original Array************//


// const myRamayan = ["Hanuman", "Ram", "Lakshman"];
// const myMahabharat = ["Arjun", "Krishna", "Balram"];

// myRamayan.push(myMahabharat);
// console.log(myRamayan);      //***problem is push array into array *//


// const newConcate = myRamayan.concat(myMahabharat);
// console.log(newConcate);    


// const spread = [...myMahabharat, ...myRamayan];
// console.log(spread);

// const newDestructure = [1, 2, 3 ,4, [5, 6, 7], 8, 9, [10, 11, [12, 13]]];

// const newFlatted = newDestructure.flat(3);

// console.log(newFlatted);

// console.log(Array.isArray("Krishna"));
// console.log(Array.from("Krishna, Ram",));

// console.log(Array.from("12345"));
  
//console.log(Array.from({name: "Krishna"})) // interesting because it should be give Keys or value which we want to make array of

let score1 = 100;
let score2 = 120;
let score3 = 140;

const arr =[ "hare", "krishna", "hare", "krishna", "hare"];
console.log(Array.of(score1, score2, score3));


