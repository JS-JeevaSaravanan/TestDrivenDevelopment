import { StringCalculator } from "../src/stringCalculator";

describe("String Calculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("Empty string should return 0", () => {
    const result = calculator.Add("");
    expect(result).toBe(0);
  });

  it("Single number should return the number itself", () => {
    const result = calculator.Add("1");
    expect(result).toBe(1);
  });
});
