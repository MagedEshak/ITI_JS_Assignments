import { Rectangle } from "./rec.js";
import { Squar } from "./sq.js";
import { Circle } from "./cir.js";

const rect = new Rectangle(10, 5);
const square = new Squar(7);
const circle = new Circle(4);

console.log(rect.toString());   // Rectangle - Area: ..., Perimeter: ...
console.log(square.toString()); // Square - Area: ..., Perimeter: ...
console.log(circle.toString());