function solution(n) {
        
    var arr = [];
    
    for(let i =1; i<n; i++){
        if(n%i == 1){
            arr.push(i);
        }
    }
    var answer = Math.min(...arr);
    return answer;
}