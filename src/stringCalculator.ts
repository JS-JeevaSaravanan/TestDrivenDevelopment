export class StringCalculator {
  public Add(numbersString: string): number {
    if (!numbersString) {
      return 0;
    }
    const numArray = numbersString.split(",").map((num) => parseInt(num));
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
