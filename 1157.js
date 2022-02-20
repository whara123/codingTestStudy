const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `zzzZaafdaaa`;

const input = stdin.toString().trim().toUpperCase();

const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
const countArr = Array(26).fill(0);

let count = 0;

for (let i = 0; i < input.length; i++) {
  count = 0;
  for (let j = 0; j < 26; j++) {
    if (input[i] == arr[j]) {
      count++;
      countArr[j] += count;
    }
  }
}

let max = 0;
let index = 0;
for (let k = 0; k < 26; k++) {
  if (max < countArr[k]) {
    max = countArr[k];
    index = k;
  }
}

count = 0;
for (let i = 0; i < 26; i++) {
  if (max == countArr[i]) {
    count++;
  }
}

console.log(count > 1 ? "?" : arr[index]);
