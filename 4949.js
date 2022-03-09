const stdin =
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin")
    : `So when I die (the [first] I will see in (heaven) is a score list).
[ first in ] ( first out ).
Half Moon tonight (At least it is better than no Moon at all].
A rope may form )( a trail in a maze.
Help( I[m being held prisoner in a fortune cookie factory)].
([ (([( [ ] ) ( ) (( ))] )) ]).
 .
.`;

const input = stdin.toString().trim().split("\n");
for (let i = 0; i < input.length - 1; i++) {
  let answerNo = false;
  let check = [];

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      check.push("(");
    } else if (input[i][j] === ")") {
      if (check.pop() !== "(") {
        answerNo = true;
        break;
      }
    }

    if (input[i][j] === "[") {
      check.push("[");
    } else if (input[i][j] === "]") {
      if (check.pop() !== "[") {
        answerNo = true;
        break;
      }
    }
  }
  console.log(!answerNo && check.length === 0 ? "yes" : "no");
}
