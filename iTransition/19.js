"use strict";
var Letter;
(function (Letter) {
    Letter[Letter["A"] = 1] = "A";
    Letter[Letter["B"] = 2] = "B";
    Letter[Letter["C"] = 2] = "C";
})(Letter || (Letter = {}));
console.log(Letter.B); // 2
