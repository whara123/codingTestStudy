const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `5
3 1 4 3 2`;

const [n, ...arr] = stdin.toString().trim().split(/\s+/);

let temp = 0;
let answer = 0;
arr.sort(function (a, b) {
  return a - b;
});

for (let i = 0; i < arr.length; i++) {
  temp += +arr[i];
  answer += temp;
}

console.log(answer);
