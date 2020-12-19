type Pair = [a: number, b: number]

export const pairs = (numbers: number[]): Pair[] =>
    numbers.flatMap((number, index) =>
        numbers.slice(index + 1).map((secondNumber): Pair => [number, secondNumber]))

type Triple = [a: number, b: number, c: number]

export const triples = (numbers: number[]): Triple[] =>
    numbers.flatMap((number, index) => pairs(numbers.slice(index + 1)).map((pair): Triple =>
        [number, ...pair]
    ))

export const getNumbers = (input: string) => input.split('\n').map((num) => parseInt(num))
