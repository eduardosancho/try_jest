import SimpleCalculator from "../SimpleCalculator";

const calculator = new SimpleCalculator();

describe('Tests for the add function', () => {
    test('2 + 2 = 4', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });
    
    test('6 + 10 = 16', () => {
        expect(calculator.add(6, 10)).toEqual(16);
    });

    test('-5 + -1 = -6', () => {
        const sum = calculator.add(-5, -1);
        expect(sum === -6).toBeTruthy();
    });
});

describe('Tests for the substract function', () => {
    test('5 - 2 = 3', () => {
        expect(calculator.substract(5, 2)).toBe(3);
    });
    
    test('15 - 11 = 4', () => {
        expect(calculator.substract(15, 11)).toEqual(4);
    });

    test('-20 - -1 = -19', () => {
        const substraction = calculator.substract(-20, -1);
        expect(substraction === -19).toBeTruthy();
    });
});

describe('Tests for the divide function', () => {
    test('1 / 2 = 0.5', () => {
        expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
    });
    
    test('1000 / 4 = 250', () => {
        expect(calculator.divide(1000, 4)).toEqual(250);
    });

    test('-15 / 2 = -7.5', () => {
        const division = calculator.divide(-15, 2);
        expect(division === -7.5).toBeTruthy();
    });
});

describe('Tests for the multiply function', () => {
    test('0.333 * 3 = 1', () => {
        expect(calculator.multiply(0.333, 3)).toBeCloseTo(1);
    });
    
    test('7 * 8 = 56', () => {
        expect(calculator.multiply(7, 8)).toEqual(56);
    });

    test('-15 * 3 = -45', () => {
        const multiplication = calculator.multiply(-15, 3);
        expect(multiplication === -45).toBeTruthy();
    });
});
