function solution(s) {
    
    if(s.length === 4 || s.length === 6){
         const regex = /[^0-9]/g;
        if(regex.test(s)){
            return false;
        }else{
            return true;
        }
    }else{
        return false;
    }
    
}