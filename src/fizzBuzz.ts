const fizzBuzz = (num: number): string => {
  switch (true) {
    case num === 15:
      return "FizzBuzz";
    case num % 3 === 0:
      return "Fizz";
    case num % 5 === 0:
      return "Buzz";
    default:
      return `${num}`;
  }
};

export { fizzBuzz };
