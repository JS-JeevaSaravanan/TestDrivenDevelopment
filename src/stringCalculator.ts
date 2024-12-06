export class StringCalculator {
  public Add(numbersString: string): number {
    if (!numbersString) {
      return 0;
    }

    const numArray = numbersString
      .replace(/\n/g, ",")
      .split(",")
      .map((num) => parseInt(num.trim()));
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
