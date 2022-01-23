import capitalize from '../capitalize'

describe('Test capitalize function', () => {
    test('happy is capitalized to Happy', () => {
        expect(capitalize('happy')).toBe('Happy');
    });
});