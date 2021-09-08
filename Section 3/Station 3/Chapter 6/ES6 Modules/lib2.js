// lib2.js

import {getLib1Message} from "./lib1.js"
export function getLib2Message(){
    return getLib1Message() +" & "+ getMessage();
}
function getMessage(){
    return "Train IT";
}

