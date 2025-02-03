import { isLeapYear } from '../src/leapYear';

describe("leap year test", () => {

    it('should return false if year not divisible by 4', () => {
        expect(isLeapYear(1997)).toBe(false);
    });

})

