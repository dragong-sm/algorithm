function solution(arr) {
    var answer = [-1];
    
    const index = arr.indexOf(Math.min(...arr));
    arr.splice(index, 1);
    
    if(arr.length > 0){
        answer = arr;
    }

    return answer;
}