import { fizzBuzz } from "../src/fizzBuzz";

describe("Fizz Buzz", () => {
  it("Should return 1 for 1", () => {
    const result = fizzBuzz(1);
    expect(result).toBe("1");
  });
});
