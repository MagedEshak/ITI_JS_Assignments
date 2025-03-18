import { Shape } from "./shapeClass.js";

export class Rectangle extends Shape {
    constructor(width,height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }

     getArea() {
    return this.width * this.height;
    }
    

     getPerimeter() {
    return 2 * (this.width + this.height);
    }
    
    toString() {
        return `${this.name}
     - Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`;
  }
}