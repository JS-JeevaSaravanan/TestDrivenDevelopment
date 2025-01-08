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

  it("Should return Fizz for 3", () => {
    const result = fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("Should return Fizz for 6", () => {
    const result = fizzBuzz(6);
    expect(result).toBe("Fizz");
  });
});
