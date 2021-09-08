//Demo 1
// let numbers:Array<number>=new Array<number>();
// myArray.push(1); // valid code
// myArray.push(1); // valid code
// myArray.push("Sukesh"); // invalid code - compile error

// let myStrings:Array<string>=new Array<string>();
// myStrings.push("Sukesh");  // valid code
// myStrings.push("Marla");  // valid code
// myStrings.push(1); // invalid code - compile error




//// demo 2 - Code 1
// function IsEqual(x:number,y:number):boolean{
//     if(x==y){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


//Demo 2  - Code 2
// function IsEqual(x,y):boolean{
//     if(x==y){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(IsEqual(1,2));
// console.log(IsEqual("A","B"));


//Demo 2  - Code 3
// function IsEqual(x,y):boolean{
//     if(x==y){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(IsEqual(1,2));
// console.log(IsEqual("A","B"));
// console.log(IsEqual("A",2));



//Demo 2  - Code 4
function IsEqual<T>(x:T,y:T):boolean{
    if(x==y){
        return true;
    }
    else{
        return false;
    }
}

console.log(IsEqual<number>(1,2));// valid code
console.log(IsEqual<string>("A","B"));// valid code

console.log(IsEqual<number>("A","B"));// invalid code - compile error
console.log(IsEqual<number>(1,"B"));// invalid code - compile error


