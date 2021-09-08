// //Demo1 
// function Add(){
//     var result=0;
//     for(let i of arguments)
//     {
//         result+=i;
//     }
//     console.log(result);
// }

// Add(1,2,3,4,5);

//Demo2
function Add(...numbers){
    var result=0;
    for(let i of numbers)
    {
        result+=i;
    }
    console.log(result);
}

Add(1,2,3,4,5);