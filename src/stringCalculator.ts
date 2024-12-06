export class StringCalculator {
  private static readonly DEFAULT_DELIMITERS = [",", "\n"];
  private static readonly CUSTOM_DELIMITER_PREFIX = "//";
  private static readonly MULTI_CHAR_DELIMITER_START = "[";
  private static readonly MULTI_CHAR_DELIMITER_END = "]";
  private static readonly VALUE_LIMIT = 1000;

  public Add(inputStr: string): number {
    if (!inputStr) {
      return 0;
    }

    const { numbersStr, delimiters } = this.extractDelimiters(inputStr);
    const numberArray = this.convertStringToNumbers(numbersStr, delimiters);
    this.checkForNegativeNumbers(numberArray);

    return this.calculateSum(numberArray);
  }

  private extractDelimiters(numbersStr: string): {
    numbersStr: string;
    delimiters: string[];
  } {
    let delimiters = StringCalculator.DEFAULT_DELIMITERS.slice();
    if (numbersStr.startsWith(StringCalculator.CUSTOM_DELIMITER_PREFIX)) {
      const delimiterEndIndex = numbersStr.indexOf("\n");
      const customDelimitersSubStr = numbersStr.slice(
        StringCalculator.CUSTOM_DELIMITER_PREFIX.length,
        delimiterEndIndex
      );
      const customDelimiters = this.extractCustomDelimiters(
        customDelimitersSubStr
      );
      delimiters = delimiters.concat(customDelimiters);
      numbersStr = numbersStr.slice(delimiterEndIndex + 1);
    }

    return { numbersStr, delimiters };
  }

  private extractCustomDelimiters(customDelimitersSubStr: string): string[] {
    const delimiters = [];
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
      delimiters.push(customDelimitersSubStr);
    }
    return delimiters;
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

  private calculateSum(numbers: number[]): number {
    return numbers.reduce((sum, num) => {
      return num <= StringCalculator.VALUE_LIMIT ? sum + num : sum;
    }, 0);
  }
}
