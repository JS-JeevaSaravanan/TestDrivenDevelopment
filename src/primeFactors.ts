const primeFactors = (num: number): number[] => {
  const factorList: number[] = [];

  if (num > 1) {
    if (num % 2 === 0) {
      const countsOfTwoDivisions = Math.floor(num / 2);
      for (let i = 0; i < countsOfTwoDivisions; i++) {
        factorList.push(2);
      }
    } else {
      factorList.push(num);
    }
  }

  return factorList;
};

export { primeFactors };
