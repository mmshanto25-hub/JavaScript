let a = 5;
let b = 5;
let c = 5;
if (a === b && b === c) {
    console.log("Equilateral");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
}