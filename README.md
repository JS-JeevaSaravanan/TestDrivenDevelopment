
# TDD String Calculator

This repository contains an implementation of a **String Calculator** that supports various delimiters (comma, newline, and custom multi-character delimiters). It performs summation of numbers provided in a string format, while handling errors like negative numbers and numbers greater than 1000.

## Features

- **Basic Calculation**: Supports addition of numbers separated by commas (`,`) or newlines (`\n`).
- **Custom Delimiters**: Supports custom delimiters defined with the `//` prefix, including multi-character delimiters (e.g., `//[***]`).
- **Negative Numbers**: Throws an error if any negative numbers are provided in the input string.
- **Number Limit**: Ignores numbers greater than 1000 in the sum calculation.

## TDD Approach

This project was developed using **Test-Driven Development (TDD)**, ensuring that the implementation is thoroughly tested from the start. 

### Why TDD?

- **Early Detection of Bugs**: Writing tests first ensures that we identify potential issues early in the development process.
- **Confident Refactoring**: Since the code is covered by tests, we can refactor or extend functionality without fear of breaking existing behavior.
- **Documentation**: Tests serve as living documentation of the system's expected behavior.

### Key Test Cases

- **Empty input** returns 0.
- **Single number** returns the number itself.
- **Two numbers separated by a comma** returns their sum.
- **Multiple numbers** separated by commas or newlines are summed correctly.
- **Custom delimiters** can be defined using `//` with support for multi-character delimiters.
- **Negative numbers** throw an exception with a list of negative values.
- **Numbers greater than 1000** are ignored in the sum.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JS-JeevaSaravanan/tdd-string-calculator.git
   cd tdd-string-calculator
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

## Usage

### Example Usage

```typescript
import { StringCalculator } from './StringCalculator';

const calculator = new StringCalculator();

console.log(calculator.Add("1,2,3")); // Output: 6
console.log(calculator.Add("//;\n1;2")); // Output: 3
console.log(calculator.Add("//[***]\n1***2***3")); // Output: 6
console.log(calculator.Add("1,-2,3")); // Throws: Negatives not allowed: -2
```

## Running Tests

The tests are written using Jest. To run the tests, simply execute:

```bash
npm test
```

This will run all the test cases to verify the functionality of the `StringCalculator` class.

---

### Highlights of the TDD Process:

- **Tests Before Code**: The development process was driven by writing tests first, ensuring that each feature and edge case was validated before implementing the solution.
- **Test Coverage**: All the important behaviors of the `StringCalculator` (including delimiter handling, negative number checking, and value limits) are tested thoroughly.
- **Refactor with Confidence**: The tests allow for safe refactoring and feature additions without fear of breaking existing functionality.

### References:
https://osherove.com/tdd-kata-1/
