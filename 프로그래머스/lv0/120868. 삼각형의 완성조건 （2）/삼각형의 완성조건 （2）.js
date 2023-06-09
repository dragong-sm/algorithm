function solution(sides) {
   const long = Math.max(...sides);
   const short = Math.min(...sides);
    let count = 0;
    
    // long이 제일 긴 변이면?
    for(let i = 1 ; i < long; i++){
        if(i + short > long){
            count += 1;
        }
    }
    
    // 나머지 한 변이 가장 긴 변이면?
    for(let i = long; i < (short+long); i++){
        count += 1;
    }

    return count;
}