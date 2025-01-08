const primeFactors = (num: number): number[] => {
  const factorList: number[] = [];

  if (num > 1) {
    factorList.push(num);
  }

  return factorList;
};

export { primeFactors };
