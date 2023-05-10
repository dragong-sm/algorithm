function solution(n)
{
    const arr = n.toString().split("");
    var sum = 0;
    
    arr.forEach(el => {
        sum += parseInt(el);
    })

    return  sum ;
}