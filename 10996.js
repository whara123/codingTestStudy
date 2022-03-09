const stdin =
  process.platform === "linux" ? require("fs").readFileSync("/dev/stdin") : `7`;

const input = stdin.toString().trim();

let answer = "";
for (let i = 0; i < input * 2; i++) {
  if (i % 2 == 0) {
    for (let j = 0; j < Math.round(input / 2); j++) {
      answer += "* ";
    }
  } else {
    for (let j = 0; j < Math.floor(input / 2); j++) {
      answer += " *";
    }
  }
  answer += "\n";
}
console.log(answer);
