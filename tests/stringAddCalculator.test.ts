import { stringAddCalculator } from "../src/stringAddCalculator";

describe("String Calculator", () => {
  it("Empty string should return 0", () => {
    const result = stringAddCalculator("");
    expect(result).toBe(0);
  });
});
