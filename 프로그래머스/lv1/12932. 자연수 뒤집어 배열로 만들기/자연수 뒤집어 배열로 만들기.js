function solution(n) {
    let arr = n.toString().split("").reverse();
    let answer = [];

    arr.forEach(el => {
        answer.push(parseInt(el));
    })
    
    return answer;
}