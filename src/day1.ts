import { pairs, triples } from "./utilities";

export function productOfPairs(numbers: number[]) {
    const numberPairs = pairs(numbers);
    const [num1, num2] = numberPairs.find(([a, b]) => a + b === 2020) ?? [0, 0];

    return num1 * num2;
}

export function productOfTriples(numbers: number[]) {
    const numberTriples = triples(numbers);
    const [num1, num2, num3] = numberTriples.find(([a, b, c]) => a + b + c === 2020) ?? [0, 0, 0];

    return num1 * num2 * num3;
}
