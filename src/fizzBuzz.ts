const fizzBuzz = (num: number): string => {
  if (num % 3 === 0) return "Fizz";
  else if (num === 5) return "Buzz";
  return num.toString();
};

export { fizzBuzz };
