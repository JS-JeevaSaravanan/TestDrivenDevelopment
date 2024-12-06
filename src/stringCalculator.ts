export class StringCalculator {
  private getNumbersToSum(numbersStr: string): string[] {
    const customDelimiterKeyword = "//";
    if (numbersStr.startsWith(customDelimiterKeyword)) {
      const delimiterEndIndex = numbersStr.indexOf("\n");
      const delimiter = numbersStr.slice(
        customDelimiterKeyword.length,
        delimiterEndIndex
      );
      const numbers = numbersStr.slice(delimiterEndIndex + 1);
      return this.splitNumbers(numbers, delimiter);
    }
    return this.splitNumbers(numbersStr);
  }

  private splitNumbers(numbersStr: string, delimiter: string = ","): string[] {
    const delimiterRegex = new RegExp(`[${delimiter}\n]`);
    return numbersStr.split(delimiterRegex).map((num) => num.trim());
  }

  public Add(numbersStr: string): number {
    if (!numbersStr) {
      return 0;
    }

    const numberStrToSum = this.getNumbersToSum(numbersStr);
    return numberStrToSum
      .map((num) => parseInt(num))
      .reduce((sum, num) => sum + num, 0);
  }
}
