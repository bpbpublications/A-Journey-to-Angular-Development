function SlowFunction(){
    let ms=3000;
    let start = new Date().getTime();
    let end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}


//Demo - Preparation
function MyFunction(){
    SlowFunction();
    return 100;
}
console.log("Logic 1");//some logic 1
console.log("Logic 2");//some logic 2
let returnValue=MyFunction();//some logic 3
console.log("Logic 4");//some logic 4
console.log("Logic 5");//some logic 5
console.log(returnValue);//some logic 6
console.log(returnValue+100);//some logic 7



// //Demo - Callback into action
// function MyFunction(callbackFn){
//     setTimeout(() => {
//         SlowFunction();
//         callbackFn(100);    
//     }, 1);
// }
// console.log("Logic 1");//some logic 1
// console.log("Logic 2");//some logic 2

// MyFunction(returnValue=>{
//     console.log(returnValue);//some logic 6
//     console.log(returnValue+100);//some logic 7
// });//some logic 3

// console.log("Logic 4");//some logic 4
// console.log("Logic 5");//some logic 5


////Demo - Callback with Exception - Way 1
// function MyFunction(inputValue,callbackFn){
//     if(inputValue%2==0){
//         setTimeout(() => {
//                 SlowFunction();
//                 callbackFn(100);
//         }, 1);
//     }    
//     else{
//         return "Invalid Input";
//     }
// }

// let fnReturnValue=MyFunction(100,returnValue=>{
//     console.log(returnValue);//some logic 6
//     console.log(returnValue+100);//some logic 7
// });
// if(fnReturnValue!=undefined){
//     console.log(fnReturnValue);
// }


// //Demo - Callback with Exception - Way 2
// function MyFunction(inputValue,callbackFn,errorCallbackFn){
//     if(inputValue%2==0){
//         setTimeout(() => {
//                 SlowFunction();
//                 callbackFn(100);
//         }, 1);
//     }    
//     else{
//         errorCallbackFn("Invalid Input");
//     }
// }

// MyFunction(100,returnValue=>{
//     console.log(returnValue);//some logic 6
//     console.log(returnValue+100);//some logic 7
// },error=>{
//     console.log(fnReturnValue);
// });


//Demo - Callback hell
// function MyFunction(inputValue,callbackFn){
//     //some code
//     callbackFn(100);
// }
// function MyFunction2(inputValue,callbackFn){
//     //some code
//     callbackFn(100);
// }
// function MyFunction3(inputValue,callbackFn){
//     //some code
//     callbackFn(100);
// }

// MyFunction(100,returnValue=>{
//     //Some Logic
//     //Some Logic
//     MyFunction2(200,returnValue2=>{
//         //Some Logic
//         //Some Logic
//         MyFunction2(200,returnValue2=>{
//             //Some Logic
//             //Some Logic
//         });
//     })
// });



// //Demo - Promise action - Success Test
// function MyFunction(inputValue){
//     return new Promise((resolve,reject)=>{
//         if(inputValue%2==0){
//             setTimeout(() => {
//                     SlowFunction();
//                     resolve(100);
//             }, 1);
//         }    
//         else{
//             reject("Invalid Input");
//         }
//     });
// }
//
// MyFunction(12).then(result=>{
//     console.log("Result is",result);
// },result=>{
//     console.log("Error is",result);
// });



// //Demo - Promise action - Failure Test
// function MyFunction(inputValue){
//     return new Promise((resolve,reject)=>{
//         if(inputValue%2==0){
//             setTimeout(() => {
//                     SlowFunction();
//                     resolve(100);
//             }, 1);
//         }    
//         else{
//             reject("Invalid Input");
//         }
//     });
// }
//
// MyFunction(11).then(result=>{
//     console.log("Result is",result);
// },result=>{
//     console.log("Error is",result);
// });

// function MyFunction(input){
//     return new Promise((resolve,reject)=>{
//         //some logic
//         resolve(input+1);
//     });
// }
// function MyFunction2(input){
//     return new Promise((resolve,reject)=>{
//         //some logic
//         resolve(input+2);
//     });
// }
// function MyFunction3(input){
//     return new Promise((resolve,reject)=>{
//         //some logic
//         resolve(input+3);
//     });
// }
// MyFunction(100).then(result=>{
//     //some logic
//     return MyFunction2(result);
// }).then(result=>{
//     return MyFunction3(result);
// }).then(result=>{
//     console.log(result);
// });





