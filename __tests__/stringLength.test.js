import stringLength from "../stringLength";

describe('stringLength related tests', () => {
    test('check if character count in string is in range 1-10', () => {
        expect(stringLength('eduardo')).toBeGreaterTHan(0);
    });
});