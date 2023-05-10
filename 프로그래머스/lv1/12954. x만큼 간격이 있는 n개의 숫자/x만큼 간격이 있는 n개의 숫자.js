function solution(x, n) {
    var answer = [];

    for(let i = 1; i <= n; i++){
       const num = x * i;
        answer.push(num);
    }
    
    return answer;
}