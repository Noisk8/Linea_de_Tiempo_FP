export function solution(num) {
  // Tu código aquí 👈
  let result = []
  for (let i = 1; i <= num; i++) {
    let counter = 0
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        counter += 1
      }
    }
    if (counter == 2) {result.push(i)}
  }
  return result
}
