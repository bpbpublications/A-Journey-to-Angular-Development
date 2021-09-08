// //Demo 1
// //Constants - May be declared in some different file
// const AddMode:string="Add";
// const EditMode:string="Edit";
var currentMode = GetCurrenMode();
if (currentMode == Mode.AddMode) {
}
else if (currentMode == Mode.EditMode) {
}
function GetCurrenMode() {
    return Mode.VegBurger;
}
