////Demo 1
// let Add=function (number1, number2) {
//     return number1+number2;
// }
// console.log(Add(1,2));

// //Demo 2
// let Add=(number1, number2)=>{
//     return number1+number2;
// }
// console.log(Add(1,2));


////Demo 3
// let Add=(number1, number2)=>number1+number2;
// console.log(Add(1,2));



// //Demo 4
// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let evenNumbers=numbers.filter(function(number){
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(evenNumbers);


// //Demo 5
// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let evenNumbers=numbers.filter(function(number){
//     return number%2==0;
// });
// console.log(evenNumbers);


//Demo 6
// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let evenNumbers=numbers.filter(number=>{
//     return number%2==0;
// });
// console.log(evenNumbers);


//Demo 7
// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let evenNumbers=numbers.filter(number=>number%2==0);
// console.log(evenNumbers);





// //Demo 8
// let company={
//     Name:"Just Compile",
//     Services:["Consultancy","Application Development","Training"],
//     DisplayServices:function() {
//         console.log(this.Name)
//     }
// }
// company.DisplayServices();

// //Demo 9
// let company={
//     Name:"Just Compile",
//     Services:["Consultancy","Application Development","Training"],
//     DisplayServices:function() {
//         this.Services.forEach(function(service){
//             console.log(`${this.Name} does ${service}`)
//         });
//     }
// }
// company.DisplayServices();



// //Demo 10
// let company={
//     Name:"Just Compile",
//     Services:["Consultancy","Application Development","Training"],
//     DisplayServices:function() {
//         let that=this;
//         this.Services.forEach(function(service){
//             console.log(`${that.Name} does ${service}`)
//         });
//     }
// }
// company.DisplayServices();

//Demo 11
let company={
    Name:"Just Compile",
    Services:["Consultancy","Application Development","Training"],
    DisplayServices:function() {
        this.Services.forEach(service=>{
            console.log(`${this.Name} does ${service}`)
        });
    }
}
company.DisplayServices();