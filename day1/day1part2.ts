import { readFileSync } from "fs";

const main = () => {
  const inputRaw = readFileSync('/Users/afrias/adventofcode2023/day1/input.test.txt', 'utf8');
  const rows = inputRaw.trim().split('\n')
  const firstRow = rows[0]
  const nums = Array.from(firstRow.matchAll(/(?<num>\d|one|two|three|four|five|six|seven|eight|nine)/g)).map((match) => match.groups?.num)
  console.log(nums)

}
main()