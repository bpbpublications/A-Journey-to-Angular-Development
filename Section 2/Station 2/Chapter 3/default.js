
// //Demo 1
// function GetDiscount(amount,discount) {
//   return amount - discount;
// }
// let finalAmount =GetDiscount(100);
// console.log(finalAmount);


// //Demo 2
// function GetDiscount(amount,discount) {
//     if(discount===undefined){
//       discount=1    0;  
//     }
//   return amount - discount;
// }
// let finalAmount =GetDiscount(100);
// console.log(finalAmount);


//Demo 3
function GetDiscount(amount,discount=10) {
  return amount - discount;
}
let finalAmount =GetDiscount(100);
console.log(finalAmount);