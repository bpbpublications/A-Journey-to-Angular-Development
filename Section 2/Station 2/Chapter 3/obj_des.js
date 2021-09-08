// //Demo1
// let a=[1,2,3,4,5,6];
// let a1=a[0];
// let a2=a[1];
// let a3=a[2];


// //Demo 2
// let a=[1,2,3,4,5,6];
// let [a1,a2,a3]=a;
// console.log(a1);
// console.log(a2);
// console.log(a3);


// //Demo 3
// let a=[1,2,3,4,5,6];
// let [a1,a2,...a3]=a;
// console.log(a1);
// console.log(a2);
// console.log(a3);


// //Demo 4
// let a=[1,2,3,4,5,6];
// let [a1,a2,a3,a4,a5,a6,a7]=a;
// console.log(a1);
// console.log(a2);
// console.log(a3);


////Demo 5
// let a1=6;
// let a2=7;

// [a2,a1]=[a1,a2];

// console.log(a1);
// console.log(a2);


// //Demo 6
// function myFunction(otherParameters1,[a1,a2],otherParameters2) {
//     console.log(otherParameters1);
//     console.log(a1);
//     console.log(a2);
//     console.log(otherParameters2);
// }
// myFunction(77,[1,2,3,4,5],99);



// // Demo 7
// let Customer={EmployeeName:"Sukesh Marla",CompanyName:"Just Compile"};
// let {CompanyName,EmployeeName}=Customer;
// console.log(EmployeeName);
// console.log(CompanyName);

//Demo 8
function myFunction(otherParameters1,{CompanyName,EmployeeName},otherParameters2) {
    console.log(otherParameters1);
    console.log(CompanyName);
    console.log(EmployeeName);
    console.log(otherParameters2);
}
myFunction(77,{EmployeeName:"Sukesh Marla",CompanyName:"Just Compile"},99);