import stringLength from "../stringLength";

describe('stringLength related tests', () => {
    test('check if character count in string is in range 1-10', () => {
        const stringSize = stringLength('eduardo');
        expect(stringSize >= 0).toBeTruthy();
        expect(stringSize).toBeLessThan(10);
    });
});