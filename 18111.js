const { time } = require("console");

const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `3 4 0
    64 64 64 64
    64 64 64 64
    64 64 64 64`;

const [n, m, b, ...arr] = stdin.toString().trim().split(/\s+/);

let groundMin = Math.min(...arr);
let groundMax = Math.max(...arr);

let Time = 0;
let result = [];

let maxcount = 0;
let mincount = 0;

arr.filter((v) => {
  if (v == groundMax) {
    maxcount++;
  } else if (v == groundMin) {
    mincount++;
  }
});

if (maxcount > mincount) {
  if (groundMax - groundMin <= b) {
    for (let i = 0; i < arr.length; i++) {
      if (+arr[i] !== groundMax) {
        arr[i]++;
        Time++;
        i = 0;
      }
    }
    result = [Time, groundMax];
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (+arr[i] !== groundMin) {
        arr[i]--;
        Time += 2;
        i = 0;
      }
    }
    result = [Time, groundMin];
  }
} else {
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] !== groundMin) {
      arr[i]--;
      Time += 2;
      i = 0;
    }
  }
  result = [Time, groundMin];
}

console.log(...result);
