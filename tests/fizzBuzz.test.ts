import { fizzBuzz } from "../src/fizzBuzz";

describe("Fizz Buzz", () => {
  describe("Numbers that are not divisible by 3 or 5", () => {
    test.each([
      [1, "1"],
      [2, "2"],
      [4, "4"],
    ])("Should return %s for %i", (input, expectedOutput) => {
      const result = fizzBuzz(input);
      expect(result).toBe(expectedOutput);
    });
  });

  describe("Numbers divisible by 3", () => {
    test.each([[3], [6], [9], [1233]])("Should return Fizz for %i", (input) => {
      const result = fizzBuzz(input);
      expect(result).toBe("Fizz");
    });
  });

  describe("Numbers divisible by 5", () => {
    test.each([[5], [10], [205], [10_000]])(
      "Should return Buzz for %i",
      (input) => {
        const result = fizzBuzz(input);
        expect(result).toBe("Buzz");
      }
    );
  });

  it("FizzBuzz for 15", () => {
    const result = fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
});
