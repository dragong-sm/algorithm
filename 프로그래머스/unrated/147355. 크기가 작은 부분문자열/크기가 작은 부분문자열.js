function solution(t, p) {
    const length = p.length;
    let count = 0;
    
    for(let i = 0; i < t.length; i++){
        let num = t.slice(i, i + length);
        if(num.length === length){
            if(parseInt(num) <= parseInt(p)){
                count += 1;
            }
        }
    }
    
    return count;
}