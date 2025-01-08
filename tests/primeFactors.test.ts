import { primeFactors } from "../src/primeFactors";

describe("Prime Factors", () => {
  it("Prime factors of 1 should be an empty array", () => {
    const result = primeFactors(1);
    expect(result).toEqual([]);
  });
});
