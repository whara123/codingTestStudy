function solution(phone_number) {

    return phone_number.replace(phone_number.substr(0,phone_number.length-4) ,"*".repeat(phone_number.length-4));
}