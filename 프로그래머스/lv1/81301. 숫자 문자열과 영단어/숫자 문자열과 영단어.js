function solution(s) {
    
    const obj = {"zero" : "0", "one" : "1", "two" :"2", "three" : "3", "four" :"4", "five" :"5", "six" : "6", "seven" : "7","eight" : "8","nine" : "9"};
    
    const length = Object.keys(obj).length;
    
    for(let i = 0; i < length + 1; i++){
        console.log(Object.keys(obj)[i], i)
       s =  s.replace(Object.keys(obj)[i], i);
    }
    
        s = s.replace("zero", 0);
        s = s.replace("one", 1);
        s = s.replace("two",2);
        s = s.replace("three", 3);
        s = s.replace("four", 4);
        s = s.replace("five", 5);
        s = s.replace("six", 6);
        s = s.replace("seven", 7);
        s = s.replace("eight", 8);
        s = s.replace("nine", 9);
   
    return parseInt(s);
}