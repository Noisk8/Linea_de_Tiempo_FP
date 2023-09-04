export function solution(numbers) {
  let x = numbers[0] / 3.0;
  return numbers.every((num) => num % x === 0) && x;
}
