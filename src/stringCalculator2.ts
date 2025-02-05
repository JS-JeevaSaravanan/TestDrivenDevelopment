
export function stringCalculator2(input: string) {
    if (input.length === 0) {
        return 0;
    } else {
        const delimiters = [",", "\n"]

        if (input.startsWith("//")) {
            if (input.startsWith("//[")) {
                const delimitersStr = input.slice(
                    2,
                    input.indexOf("\n")
                );
                const delimitersRegex = new RegExp(`\\${"["}(.*?)\\${"]"}`, "g");
                const allDelimiterMatches = [
                    ...delimitersStr.matchAll(delimitersRegex),
                ];
                allDelimiterMatches.forEach((match) => {
                    delimiters.push(match[1]);
                });
            } else {
                const splitter = input.substring(2, 3);
                delimiters.push(splitter)
                input = input.slice(3)
            }
        }
        const delimiterRegex = new RegExp(`[${delimiters.join("")}]`);
        const numbers = input
            .split(delimiterRegex)
        const negatives = numbers.find(n => parseInt(n) < 0);
        if (negatives) throw new Error('negatives')


        let sumValue = 0;
        numbers.forEach(num => {
            const numVal = parseInt(num);
            if (numVal < 1001) {
                sumValue += numVal
            }
        })
        return sumValue;
    }
}
