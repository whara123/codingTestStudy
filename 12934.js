function solution(n) {
  let temp = Math.sqrt(n);
  return temp === Math.floor(temp) ? (temp + 1)*(temp+1) : -1;
}