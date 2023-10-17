const numbers = [4, 6, 2, 9, 1];


function solution(n) {
    var answer = 0;
    
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
            answer += i;
        }    
    }
    
    return answer;
}

console.log(solution(10));