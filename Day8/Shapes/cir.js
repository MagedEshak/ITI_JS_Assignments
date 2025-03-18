import { Shape } from "./shapeClass.js";

export class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `${this.name}
         - Area: ${this.getArea().toFixed(2)}, Perimeter: ${this.getPerimeter().toFixed(2)}`;
    }
}