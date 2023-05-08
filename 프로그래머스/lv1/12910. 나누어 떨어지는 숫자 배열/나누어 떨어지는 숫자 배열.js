function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach((el) => {
        if(el % divisor == 0){
            answer.push(el);
        }
    })
    
    answer.length < 1 ? answer.push(-1) : answer.sort((a,b) => a-b)
    
//     if(answer.length == 0){
//         answer.push(-1);
//     }else{
//         for(let i = 0; i < answer.length; i++){
//             for(let j = 0; j< answer.length; j++){
//                 if(answer[i] < answer[j]){
//                     const temp = answer[j];
//                     answer[j] =  answer[i];
//                     answer[i] = temp;
//                 }
//             }
            
//         }
//     }    
    
    return answer;
}

