import { fizzBuzz } from "../src/fizzBuzz";

describe("Fizz Buzz", () => {
  it("Should return 1 for 1", () => {
    const result = fizzBuzz(1);
    expect(result).toBe("1");
  });

  it("Should return 2 for 2", () => {
    const result = fizzBuzz(2);
    expect(result).toBe("2");
  });

  it("Should return 4 for 4", () => {
    const result = fizzBuzz(4);
    expect(result).toBe("4");
  });
});
