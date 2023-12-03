import { readFileSync } from "fs";

const main = () => {
  const inputRaw = readFileSync('/Users/afrias/adventofcode2023/day2/input.test.txt', 'utf8');
  const rows = inputRaw.trim().split('\n')
  const games = Object.fromEntries(rows.map((row) => {
    const [gameNumber, rounds] = row.split(': ')
    return [gameNumber, rounds.split('; ')]
  }))
  console.log(games)
}
main()