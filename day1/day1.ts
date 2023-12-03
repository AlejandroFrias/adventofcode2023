import { readFileSync } from "fs";

const convertToNumber = (num: string): string => {
    if (num.startsWith('one')) return '1'
    if (num.startsWith('two')) return '2'
    if (num.startsWith('three')) return '3'
    if (num.startsWith('four')) return '4'
    if (num.startsWith('five')) return '5'
    if (num.startsWith('six')) return '6'
    if (num.startsWith('seven')) return '7'
    if (num.startsWith('eight')) return '8'
    if (num.startsWith('nine')) return '9'
    return num[0]
}
const main = () => {
    const inputRaw = readFileSync('/Users/afrias/adventofcode2023/day1/input.txt', 'utf8');
    const rows = inputRaw.trim().split('\n')
    const numbers = rows.map((row) => {
        // Using zero-width capture to find every starting index of a number
        const numRegex = /(?=\d|one|two|three|four|five|six|seven|eight|nine)/g
        const allNumIndices = Array.from(row.toLowerCase().matchAll(numRegex)).map((match) => match?.index)
        // Finding the number is done by splitting the string at the known index and checking if
        // it starts with a number string
        const allNums = allNumIndices.map((numIndex) => convertToNumber(row.slice(numIndex)))
        const firstNum = allNums[0]
        const lastNum = allNums[allNums.length - 1]
        if (!firstNum || !lastNum) throw new Error('Invalid input')
        if (row.includes('0') || row.includes('zero')) throw new Error('has zero')
        console.log(`${firstNum}${lastNum}`, row)
        return parseInt(`${firstNum}${lastNum}`)
    })
    console.log(numbers)
    console.log(numbers.reduce((acc, curr) => acc + curr, 0))
}
main()