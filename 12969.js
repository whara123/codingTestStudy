let a = 5;
let b = 3;



// 기본 풀이
let star='';
    for(let i =0 ; i<a; i++){
        star+='*';
    }
    for(let j=0; j<b; j++){
        console.log(star);
    }

// 이런건?
const starStamp = (a,b) => {
    return console.log(("*".repeat(a)+"\n").repeat(b));
}
starStamp(a,b);
