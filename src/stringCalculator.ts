export class StringCalculator {
  private getNumbersStrAndDelimiter(numbersStr: string): {
    numbersStr: string;
    delimiters: string[];
  } {
    const customDelimiterKeyword = "//";
    const multipleCharDelimiterStart = "[";
    const multipleCharDelimiterEnd = "]";

    const delimiters = [",", "\n"];

    if (numbersStr.startsWith(customDelimiterKeyword)) {
      const delimiterEndIndex = numbersStr.indexOf("\n");

      if (
        numbersStr.startsWith(
          `${customDelimiterKeyword}${multipleCharDelimiterStart}`
        )
      ) {
        const delimitersStr = numbersStr.slice(
          customDelimiterKeyword.length,
          delimiterEndIndex
        );

        const regexPattern = `\\${multipleCharDelimiterStart}(.*?)\\${multipleCharDelimiterEnd}`;
        const delimitersRegex = new RegExp(regexPattern, "g");

        const allDelimiterMatches = [
          ...delimitersStr.matchAll(delimitersRegex),
        ];

        allDelimiterMatches.forEach((match) => {
          delimiters.push(match[1]);
        });
      } else {
        delimiters.push(
          numbersStr.slice(customDelimiterKeyword.length, delimiterEndIndex)
        );
      }
      numbersStr = numbersStr.slice(delimiterEndIndex + 1);
    }

    return {
      numbersStr,
      delimiters,
    };
  }

  private splitNumbers = (
    numbersStr: string,
    delimiters: string[]
  ): number[] => {
    const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);

    const numbers = numbersStr
      .split(delimiterRegex)
      .map((num) => parseInt(num));

    return numbers;
  };

  public Add(inputStr: string): number {
    if (!inputStr) {
      return 0;
    }

    const { numbersStr, delimiters } = this.getNumbersStrAndDelimiter(inputStr);

    const numberArray = this.splitNumbers(numbersStr, delimiters);
    const negativeNumbers = numberArray.filter((num) => num < 0);
    if (negativeNumbers.length) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numberArray.reduce((sum, num) => {
      return num < 1001 ? sum + num : sum;
    });
  }
}
