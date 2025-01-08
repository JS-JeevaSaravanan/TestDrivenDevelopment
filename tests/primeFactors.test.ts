import { primeFactors } from "../src/primeFactors";

describe("Prime Factors", () => {
  it("Prime factors of 1 should be an empty array", () => {
    const result = primeFactors(1);
    expect(result).toEqual([]);
  });

  it("Prime factors of 2 should be [2]", () => {
    const result = primeFactors(2);
    expect(result).toEqual([2]);
  });
});
