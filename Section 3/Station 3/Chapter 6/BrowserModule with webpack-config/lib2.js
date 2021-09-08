// lib2.js
define(['exports',"./lib1.js"], 
function(e,lib1) {
    function getLib2Message(){
        return lib1.getMessage() +" & "+ getMessage();
    }
    function getMessage(){
        return "Train IT";
    }
    e.getMessage=getLib2Message;
});

