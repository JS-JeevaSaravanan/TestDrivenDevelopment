const primeFactors = (num: number): number[] => {
  const factorList: number[] = [];
  let remainder = num;

  if (remainder > 1) {
    while (remainder % 2 === 0) {
      factorList.push(2);
      remainder = remainder / 2;
    }

    while (remainder % 3 === 0) {
      factorList.push(3);
      remainder = remainder / 3;
    }

    if (remainder > 1) {
      factorList.push(remainder);
    }
  }

  return factorList;
};

export { primeFactors };
