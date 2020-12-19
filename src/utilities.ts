export const pairs = (numbers: number[]) =>
    numbers.flatMap((number, index) =>
        numbers.slice(index + 1).map((secondNumber): [a: number, b: number] => [number, secondNumber]))

export const getNumbers = (input: string) => input.split('\n').map((num) => parseInt(num))
