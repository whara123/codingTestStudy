const stdin =
process.platform === "linux"
? require("fs").readFileSync("/dev/stdin")
: `     `;

// stdin을 정제(?)하는 과정
const input = stdin.toString().trim();

// 풀이 작성
console.log(input==="" ? 0 : input.split(" ").length);