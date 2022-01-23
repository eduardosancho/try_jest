import SimpleCalculator from "../SimpleCalculator.mjs";

const calculator = new SimpleCalculator();

describe('Tests for the add function', () => {
    test('2 + 2 = 4', () => {
        expect(calculator.add(2, 2)).toBe(4);
    });
});