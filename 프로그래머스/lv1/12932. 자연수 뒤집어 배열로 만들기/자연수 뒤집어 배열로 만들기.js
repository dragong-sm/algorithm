function solution(n) {
    const arr = String(n).split("");
    var answer =[];
    for(let i=arr.length-1 ; i>=0; i--){
        answer.push(parseInt(arr[i]));
    }
    return answer;
}