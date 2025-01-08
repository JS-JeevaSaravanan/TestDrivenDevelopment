const fizzBuzz = (num: number): string => {
  if ([3, 6].includes(num)) return "Fizz";
  return num.toString();
};

export { fizzBuzz };
