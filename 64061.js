function solution(board, moves) {
  var answer = 0;
  let arr = [];

  for (let i = 0; i < moves.length; i++) {
    let a = moves[i] - 1;
    for (let j = 0; j < board[a].length; j++) {
      if (board[j][a] !== 0) {
        arr.push(board[j][a]);
        board[j][a] = 0;
        if (arr[arr.length - 1] == arr[arr.length - 2]) {
          answer += 2;
          arr.splice(arr.length - 2, 2);
        }
        break;
      }
    }
  }

  return answer;
}
