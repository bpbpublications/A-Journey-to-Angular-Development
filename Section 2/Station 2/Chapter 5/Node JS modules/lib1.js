//lib1.js
function getString(){
    return getString2();
}

function getString2(){
    return "Just Compile";
}

exports.myFunction=getString;