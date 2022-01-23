import SimpleCalculator from "../SimpleCalculator";

describe('Tests for the add function', () => {
    test('2 + 2 = 4', () => {
        const calculator = new SimpleCalculator();
        expect(calculator.add(2, 2)).toBe(4);
    });
    
    test('6 + 10 = 16', () => {
        const calculator = new SimpleCalculator();
        expect(calculator.add(6, 10)).toEqual(16);
    });

    test('-5 + -1 = -6', () => {
        const calculator = new SimpleCalculator();
        const sum = calculator.add(-5, -1);
        expect(sum === -6).toBeTruthy();
    });
});