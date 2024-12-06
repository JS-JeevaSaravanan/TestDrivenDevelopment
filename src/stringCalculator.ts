export class StringCalculator {
  private getNumbersStrAndDelimiter(numbersStr: string): {
    numbersStr: string;
    delimiter: string;
  } {
    const customDelimiterKeyword = "//";
    let delimiter = ",";

    if (numbersStr.startsWith(customDelimiterKeyword)) {
      const delimiterStartIndex = numbersStr.indexOf("[");
      const delimiterEndIndex = numbersStr.indexOf("]");

      if (delimiterStartIndex !== -1 && delimiterEndIndex !== -1) {
        delimiter = numbersStr.slice(
          delimiterStartIndex + 1,
          delimiterEndIndex
        );
        numbersStr = numbersStr.slice(delimiterEndIndex + 2);
      } else {
        const delimiterEndIndex = numbersStr.indexOf("\n");
        delimiter = numbersStr.slice(
          customDelimiterKeyword.length,
          delimiterEndIndex
        );
        numbersStr = numbersStr.slice(delimiterEndIndex + 1);
      }
    }

    return {
      numbersStr,
      delimiter,
    };
  }

  private splitNumbers = (numbersStr: string, delimiter: string): number[] => {
    const delimiterRegex = new RegExp(`[${delimiter}\n]`);
    return numbersStr.split(delimiterRegex).map((num) => parseInt(num));
  };

  public Add(inputStr: string): number {
    if (!inputStr) {
      return 0;
    }

    const { numbersStr, delimiter } = this.getNumbersStrAndDelimiter(inputStr);

    const numberArray = this.splitNumbers(numbersStr, delimiter);
    const negativeNumbers = numberArray.filter((num) => num < 0);
    if (negativeNumbers.length) {
      throw new Error(`Negatives not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numberArray.reduce((sum, num) => {
      return num < 1001 ? sum + num : sum;
    });
  }
}
