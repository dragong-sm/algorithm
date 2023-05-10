function solution(strings, n) {
    
  var arr = [];
  var answer = [];
    
  strings.forEach(el => {
      // console.log(el[n]);
      arr.push(el[n]);
  }) 
    
  arr = arr.sort();
    
  arr.forEach(el => {
      strings.sort().forEach(str => {
          if(str[n] == el && !answer.includes(str)){
              answer.push(str);
          }
      })
  })

    return answer;
}