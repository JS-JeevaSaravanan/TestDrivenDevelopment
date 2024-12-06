export class StringCalculator {
  public Add(numbers: string): number {
    if (!numbers) return 0;
    return parseInt(numbers);
  }
}
