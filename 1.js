export function solution(num1, num2) {
let rest1 = num1 - num2;
let rest2 = num1 + num2;
return parseInt(rest1.toString() + rest2.toString());
}
solution()
