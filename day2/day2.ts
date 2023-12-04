import { readFileSync } from "fs";

const main = () => {
  const inputRaw = readFileSync('/Users/afrias/adventofcode2023/day2/input.test.txt', 'utf8');
  const rows = inputRaw.trim().split('\n')
  const games = Object.fromEntries(rows.map((row) => {
    const [gameNumber, rounds] = row.split(': ')
    return [gameNumber.split(' ')[1], rounds.split('; ').map((round) => {
      const draws = round.split(', ')
      return Object.fromEntries(draws.map((draw) => {
        const [value, color] = draw.split(' ')
        return [color, parseInt(value)]
      }))
    })]
  }))
  let validGameIdTotal = 0
  for (const [gameId, rounds] of Object.entries(games)) {
    let isValid = true
    for (const round of rounds) {
      if (round['red'] > 12 || round['green'] > 13 || round['blue'] > 14) {
        isValid = false
      }
    }
    if (isValid) {
      validGameIdTotal += parseInt(gameId)
    }
  }
  console.log({ validGameIdTotal })
  let sumOfPowers = 0
  for (const [gameId, rounds] of Object.entries(games)) {
    let minRed = 0
    let minGreen = 0
    let minBlue = 0
    for (const round of rounds) {
      minRed = Math.max(minRed, round['red'] ?? 0)
      minGreen = Math.max(minGreen, round['green'] ?? 0)
      minBlue = Math.max(minBlue, round['blue'] ?? 0)
    }
    sumOfPowers += minRed * minGreen * minBlue
  }
  console.log({ sumOfPowers })

}
main()