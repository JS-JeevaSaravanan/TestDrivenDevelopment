const primeFactors = (num: number): number[] => {
  const factorList: number[] = [];
  let remainder = num;

  for (let factor = 2; factor <= remainder; factor++) {
    while (remainder % factor === 0) {
      factorList.push(factor);
      remainder /= factor;
    }
  }
  return factorList;
};

export { primeFactors };
