function solution(s) {
    const str = s.split(" ");
    let arr = [];
    
    str.forEach(el => {
        let word = "";
        for(let i = 1; i <= el.length; i++){
            if(i % 2 !== 0){
                word += el[i-1].toUpperCase();
            }else{
                word += el[i-1].toLowerCase();
            }
        }
       arr.push(word);
    })

    return arr.join(" ");
}