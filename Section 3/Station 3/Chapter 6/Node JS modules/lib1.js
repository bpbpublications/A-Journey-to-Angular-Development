//lib1.js
function getLib1Message(){
    return getMessage();
}
function getMessage(){
    return "Just Compile";
}
exports.getMessage=getLib1Message;