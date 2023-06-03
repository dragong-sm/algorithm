function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach(el => {
        if(el % divisor === 0){
            answer.push(el);
        }
    })
    
    if(answer.length > 0){
        // 숫자를 정렬할 때, 정렬 순서를 정의하는 비교 함수를 인수로 전달 !
        return answer.sort((a, b) => a - b);
    }else{
        return [-1];
    }
}