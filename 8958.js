const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`;

// stdin을 정제(?)하는 과정
const [n, ...arr] = stdin.toString().trim().split("\n");

// 풀이 작성

for (let i = 0; i < n; i++) {
  let score = 0;
  let result = 0;

  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "O") {
      score++;
      result += score;
    } else {
      score = 0;
    }
  }
  console.log(result);
}
