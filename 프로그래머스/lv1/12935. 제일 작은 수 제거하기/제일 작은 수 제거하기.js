function solution(arr) {
    const minIndex = arr.indexOf(Math.min(...arr));
    arr.splice(minIndex, 1);
    
    if(arr.length === 0){
        return [-1];
    }else{
         return arr;
    }

}