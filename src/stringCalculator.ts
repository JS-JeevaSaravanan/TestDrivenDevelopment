export class StringCalculator {
  public Add(numbersString: string): number {
    if (!numbersString) {
      return 0;
    }
    if (!numbersString.includes(",")) {
      return parseInt(numbersString);
    }
    return (
      parseInt(numbersString.split(",")[0]) +
      parseInt(numbersString.split(",")[1])
    );
  }
}
