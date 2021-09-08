
// //Demo 1
// console.log(a);
// let a;


// //Demo 2
// if(true){
//   let a;
// }
// console.log(a);


//Demo 3
let a=10; // Old code - unaffected
console.log(a);// Old code - unaffected -Expecting 10 as output
if(true){
  //Some logic
  let a=9; // new code
  console.log(a);// New code - unaffected -Expecting 9 as output
}
console.log(a);// Old code - unaffected -Expecting 10 as output


