function solution(s){
    var countP = 0;
    var countY = 0;
    
    const str = s.toLowerCase().split("");

    str.forEach(el => {
        if(el == "p"){
            countP += 1;
        }
        if(el == "y"){
            countY += 1;
        }
    })

    if(countP == countY){
        return true;
    }else{
        return false;
    }
}