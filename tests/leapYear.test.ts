import { isLeapYear } from '../src/leapYear';

describe("leap year test", () => {

    it('should return false if year not divisible by 4', () => {
        expect(isLeapYear(1997)).toBe(false);
    });

    it('should return true if year is divisible by 4', () => {
        expect(isLeapYear(996)).toBe(true);
    })

    it('should return true if year is divisible by 400', () => {
        expect(isLeapYear(1600)).toBe(true);
    })

    it('should return false if year is divisible by 4, divisible by 100 but not divisible by 400', () => {
        expect(isLeapYear(1800)).toBe(false);
    })

})

