//lib2.js
let lib1=require("./lib1");
function getLib2Message(){
    return lib1.getMessage() +" & "+ getMessage();
}
function getMessage(){
    return "Train IT";
}
exports.getMessage=getLib2Message;