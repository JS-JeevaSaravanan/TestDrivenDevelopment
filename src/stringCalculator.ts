export class StringCalculator {
  private getNumbersStrAndDelimiter(numbersStr: string): {
    numbersStr: string;
    delimiter: string;
  } {
    const customDelimiterKeyword = "//";
    let delimiter = ",";
    if (numbersStr.startsWith(customDelimiterKeyword)) {
      const delimiterEndIndex = numbersStr.indexOf("\n");
      delimiter = numbersStr.slice(
        customDelimiterKeyword.length,
        delimiterEndIndex
      );
      numbersStr = numbersStr.slice(delimiterEndIndex + 1);
    }
    return {
      numbersStr,
      delimiter,
    };
  }

  private splitAndAddNumbers = (
    numbersStr: string,
    delimiter: string
  ): number => {
    const delimiterRegex = new RegExp(`[${delimiter}\n]`);
    return numbersStr
      .split(delimiterRegex)
      .map((num) => parseInt(num))
      .reduce((sum, num) => sum + num, 0);
  };

  public Add(inputStr: string): number {
    if (!inputStr) {
      return 0;
    }

    const { numbersStr, delimiter } = this.getNumbersStrAndDelimiter(inputStr);
    return this.splitAndAddNumbers(numbersStr, delimiter);
  }
}
