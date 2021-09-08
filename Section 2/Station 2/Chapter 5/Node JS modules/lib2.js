//lib2 .js
function getString(){
    return getString2();
}

function getString2(){
    return "Train IT";
}

exports.myFunction=getString2;