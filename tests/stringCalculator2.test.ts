import { stringCalculator2} from "../src/stringCalculator2";

describe("string calculator", () => {
    it('should return 0 when empty string', () => {
        expect(stringCalculator2("")).toBe(0);
    });

    it('should return same number when input is single number', () => {
        expect(stringCalculator2("4")).toBe(4);
    });

    it('should return sum of numbers when input is multiple numbers', () => {
        expect(stringCalculator2("1,2")).toBe(3);
    });

    it('should return sum of numbers when input string numbers are split with newLine or comma', () => {
        expect(stringCalculator2("1\n2,3")).toBe(6);
    });
})