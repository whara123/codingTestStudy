const stdin =
  process.platform === "linux" ? require("fs").readFileSync("/dev/stdin") : `1`;

const input = stdin.toString().trim();

let arr = [500, 100, 50, 10, 5, 1];
let change = 1000 - input;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (change >= arr[i]) {
    change -= arr[i];
    count++;
    i = 0;
  }
}

console.log(count);
