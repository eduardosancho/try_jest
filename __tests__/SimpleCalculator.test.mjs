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
        const sum = calculator.substract(-20, -1);
        expect(sum === -19).toBeTruthy();
    });
});
