import { getNumbers, pairs } from "./utilities";

export function productOfEntries(input: string) {
    const numberPairs = pairs(getNumbers(input));
    const [num1, num2] = numberPairs.find(([a, b]) => a + b === 2020) ?? [0, 0];

    return num1 * num2;
}
