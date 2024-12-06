import { stringAddCalculator } from "../src/stringAddCalculator";

describe("String Calculator", () => {
  it("Empty string should return 0", () => {
    const result = stringAddCalculator("");
    expect(result).toBe(0);
  });

  it("Single number should return the number itself", () => {
    const result = stringAddCalculator("1");
    expect(result).toBe(1);
  });
});
