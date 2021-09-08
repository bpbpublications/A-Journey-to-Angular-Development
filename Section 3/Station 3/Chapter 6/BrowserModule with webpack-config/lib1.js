
//lib1.js
define(['exports'], 
function(e) {
    function getLib1Message(){
        return getMessage();
    }
    function getMessage(){
        return "Just Compile123";
    }
    e.getMessage=getLib1Message;
});
