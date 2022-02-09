function solution(n) {
  var answer = 0;
  let arr = Array(n + 1).fill(true);
  for (let i = 2; i <= n; i++) {
    if (arr[i] === true) {
      answer++;
    }
    for (let j = 1; i * j <= n; j++) {
      arr[i * j] = false;
    }
  }
  return answer;
}
