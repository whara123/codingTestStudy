function solution(sizes) {
  let temp = [];
  let max = 0;
  let max2 = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      temp = sizes[i][1];
      sizes[i][1] = sizes[i][0];
      sizes[i][0] = temp;
    }
  }
  for (let i = 0; i < sizes.length; i++) {
    if (max < sizes[i][0]) {
      max = sizes[i][0];
    }
    if (max2 < sizes[i][1]) {
      max2 = sizes[i][1];
    }
  }

  return max * max2;
}
