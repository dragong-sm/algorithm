function solution(a, b) {
    var sum = 0;
    
    if(a == b){
        return a;
    }
    else if(a > b){
        for(let i= b; i < a+1 ; i++){
            sum += i;
        }
        return sum;
    }
    else if(a < b){
        for(let i= a; i < b+1 ; i++){
            sum += i;
        }
        return sum;
    }
}