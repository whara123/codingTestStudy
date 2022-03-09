const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `5 21
5 6 7 8 9`;

const [n, m, ...arr] = stdin.toString().trim().split(/\s+/);

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      let sum = +arr[i] + +arr[j] + +arr[k];

      if (sum > answer && sum <= m) {
        answer = sum;
      }
    }
  }
}
console.log(answer);
