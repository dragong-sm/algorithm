function solution(s) {
    var answer = []

    s = s.split(" ");
    
    s.forEach(word => {
        word = word.split("");
        for(let i=0; i< word.length; i++){
            if(i % 2 == 0){
                word[i] = word[i].toUpperCase();
            }else{
                word[i] = word[i].toLowerCase();
            }
        }
        answer.push(word.join(""));
    })
    
    return  answer.join(" ")
}