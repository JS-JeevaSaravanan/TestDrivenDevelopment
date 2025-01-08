import { fizzBuzz } from "../src/fizzBuzz";

describe("Fizz Buzz", () => {
  test.each([
    [1, "1"],
    [2, "2"],
    [4, "4"],
  ])("Should return %s for %i", (input, expectedOutput) => {
    const result = fizzBuzz(input);
    expect(result).toBe(expectedOutput);
  });

  test.each([[3], [6]])("Should return Fizz for %i", (input) => {
    const result = fizzBuzz(input);
    expect(result).toBe("Fizz");
  });
});
