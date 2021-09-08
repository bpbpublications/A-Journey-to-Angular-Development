define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    //reusable.ts
    function getString() {
        return getString2();
    }
    exports.getString = getString;
    function getString2() {
        return "Just Compile";
    }
});
