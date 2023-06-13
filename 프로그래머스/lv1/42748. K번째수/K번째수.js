function solution(array, commands) {
    var answer = [];
    
    commands.forEach(el =>{
        const newArr = array.slice(el[0]-1, el[1]);
        const idx = el[2]-1;
        newArr.sort((a,b) => a -b);
        answer.push(newArr[idx]);
    })
    
    return answer;
}