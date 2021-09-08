
// //Demo 1
// //Constants - May be declared in some different file
// const AddMode:string="Add";
// const EditMode:string="Edit";

// let currentMode=GetCurrenMode(); 
// if(currentMode==AddMode){
//     //Do Save operation
// }
// else if(currentMode==EditMode){
//     //Do Update Operatopm
// }

// function GetCurrenMode():string{
//     //Some logic
//     return "VegBurger";
// }




const enum Mode{
    AddMode="Add",
    EditMode="Edit"
}
let currentMode:Mode=GetCurrenMode();
if(currentMode==Mode.AddMode){
   //Do Save operation
}
else if(currentMode==Mode.EditMode){
   //Do Update Operatopm
}

function GetCurrenMode():Mode{
    return Mode.VegBurger;
}