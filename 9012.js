const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(`;

const [n, ...arr] = stdin.toString().trim().split("\n");

for (let i = 0; i < n; i++) {
  str = arr[i];
  for (let j = 0; j < 50; j++) {
    if (str !== "") {
      str = str.replace(/\(\)/g, "");
    }
  }
  console.log(str === "" ? "YES" : "NO");
}
