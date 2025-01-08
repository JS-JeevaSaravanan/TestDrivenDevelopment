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
    test.each([[3], [6], [9], [1230]])("Should return Fizz for %i", (input) => {
      const result = fizzBuzz(input);
      expect(result).toBe("Fizz");
    });
  });


  it("Should return Buzz for 5", () => {
    const result = fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

});
