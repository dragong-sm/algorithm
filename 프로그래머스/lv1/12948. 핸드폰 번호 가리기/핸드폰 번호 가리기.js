function solution(phone_number) {
    const count = phone_number.substr(0,phone_number.length-4).length;
    let star = ""
    
    for(let i=0; i < count ; i++){
        star += "*"
    }
    
    return phone_number.replace(phone_number.substr(0,phone_number.length-4), star);
}