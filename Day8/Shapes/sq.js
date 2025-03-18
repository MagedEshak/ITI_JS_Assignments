import { Rectangle } from "./rec.js";

export class Squar extends Rectangle {
    constructor(side) {
        super(side, side);
          this.name = "Square";
  }

  toString() {
      return `${this.name}
     - Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`;
  }
}