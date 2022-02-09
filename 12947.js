function solution(x) {
    let num=0;
    let temp = x;
    x = x.toString();
    
    for(let i=0; i <x.length; i++){
        num += parseInt(x[i]);
    }
    
    return temp%num === 0 ? true : false;
}