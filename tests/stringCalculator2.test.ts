import { stringCalculator2} from "../src/stringCalculator2";

describe("string calculator", () => {
    it('should return 0 when empty string', () => {
        expect(stringCalculator2("")).toBe(0);
    });
})