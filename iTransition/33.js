let x = { x: 10, y: 20 };
let y = { x: 20 };
let z = Object.create(y);
console.log(z.y);