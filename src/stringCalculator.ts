enum Operations {
  "ADD",
  "MULTIPLY",
}

export class StringCalculator {
  private static readonly DEFAULT_DELIMITERS = [",", "\n"];
  private static readonly CUSTOM_DELIMITER_PREFIX = "//";
  private static readonly MULTI_CHAR_DELIMITER_START = "[";
  private static readonly MULTI_CHAR_DELIMITER_END = "]";
  private static readonly VALUE_LIMIT = 1000;

  public evaluate(inputStr: string): number {
    if (!inputStr) {
      return 0;
    }

    const { numbersStr, delimiters, operationType } =
      this.extractDelimitersAndOperation(inputStr);
    const numberArray = this.convertStringToNumbers(numbersStr, delimiters);
    this.checkForNegativeNumbers(numberArray);

    return this.calculate(numberArray, operationType);
  }

  private extractDelimitersAndOperation(numbersStr: string): {
    numbersStr: string;
    delimiters: string[];
    operationType: Operations;
  } {
    let operationType = Operations.ADD;
    let delimiters = StringCalculator.DEFAULT_DELIMITERS.slice();
    if (numbersStr.startsWith(StringCalculator.CUSTOM_DELIMITER_PREFIX)) {
      const delimiterEndIndex = numbersStr.indexOf("\n");
      const customDelimitersSubStr = numbersStr.slice(
        StringCalculator.CUSTOM_DELIMITER_PREFIX.length,
        delimiterEndIndex
      );
      const { customDelimiters, operationType: operationEvaluationType } =
        this.extractCustomDelimiters(customDelimitersSubStr);
      operationType = operationEvaluationType;
      delimiters = delimiters.concat(customDelimiters);
      numbersStr = numbersStr.slice(delimiterEndIndex + 1);
    }

    return { numbersStr, delimiters, operationType };
  }

  private extractCustomDelimiters(customDelimitersSubStr: string): {
    customDelimiters: string[];
    operationType: Operations;
  } {
    const delimiters = [];
    let operationType = Operations.ADD;
    if (
      customDelimitersSubStr.startsWith(
        StringCalculator.MULTI_CHAR_DELIMITER_START
      )
    ) {
      const regexPattern = `\\${StringCalculator.MULTI_CHAR_DELIMITER_START}(.*?)\\${StringCalculator.MULTI_CHAR_DELIMITER_END}`;
      const delimitersRegex = new RegExp(regexPattern, "g");

      const allDelimiterMatches = [
        ...customDelimitersSubStr.matchAll(delimitersRegex),
      ];
      allDelimiterMatches.forEach((match) => delimiters.push(match[1]));
    } else {
      if (customDelimitersSubStr === "*") {
        operationType = Operations.MULTIPLY;
      }
      delimiters.push(customDelimitersSubStr);
    }
    return {
      customDelimiters: delimiters,
      operationType,
    };
  }

  private convertStringToNumbers(
    numbersStr: string,
    delimiters: string[]
  ): number[] {
    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
    return numbersStr.split(delimiterRegex).map((num) => parseInt(num));
  }

  private checkForNegativeNumbers(numbers: number[]): void {
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }
  }

  private calculate(numbers: number[], operationType: Operations): number {
    if (operationType === Operations.MULTIPLY) {
      return numbers.reduce((sum, num) => {
        return num <= StringCalculator.VALUE_LIMIT ? sum * num : sum;
      }, 1);
    } else if (operationType === Operations.ADD) {
      return numbers.reduce((sum, num) => {
        return num <= StringCalculator.VALUE_LIMIT ? sum + num : sum;
      }, 0);
    } else {
      return 0;
    }
  }
}
