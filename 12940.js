function solution(n, m) {
  var answer = [];
  let temp = 0;

  const big = (a, b) => {
    while (a % b !== 0) {
      temp = a % b;
      a = b;
      b = temp;
    }
    return b;
  };

  const min = (a, b) => {
    return (a * b) / big(a, b);
  };

  answer.push(big(n, m));
  answer.push(min(n, m));
  return answer;
}
