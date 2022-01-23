export default class SimpleCalculator {
    constructor() {
        this.two = 2;
        this.five = 5;
    }

    add(num) {
        return num + this.five;
    }

    substract(num) {
        return num - this.five;
    }

    divide(num) {
        return num / this.two;
    }

    multiply(num) {
        return num * this.two;
    }
}