const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `baekjoon`;

const input = stdin.toString().trim();

let a = "";
let b = "";

for (let i = 0; i < parseInt(input.length / 2); i++) {
  a += input[i];
}

let inputReverse = input.split("").reverse().join("");

for (let j = 0; j < parseInt(inputReverse.length / 2); j++) {
  b += inputReverse[j];
}

console.log(a === b ? 1 : 0);
