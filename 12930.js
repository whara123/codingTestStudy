function solution(s) {
    var answer = '';
    const words = s.split(" ");
    
    for(let i=0; i<words.length;i++){
        const chars = words[i].split('');
        for(let j=0; j<chars.length;j++){
            if(j%2==0){
                answer += chars[j].toUpperCase();
            } else {
                answer +=chars[j].toLowerCase();
            }
        }
        if(i!==words.length-1){
            answer+=" ";
        }
    }
    return answer;
}