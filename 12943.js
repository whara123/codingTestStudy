function solution(num) {
    var answer = 0;
    for(let i=0; num!==1;i++){
        if(num%2===0){
            num=num/2;
            answer++;
        } else {
            num=(num*3)+1;
            answer++;
        }
    }
    
    return answer < 500 ? answer : -1;
}