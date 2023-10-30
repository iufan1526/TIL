function solution(num) {
    let answer = 0;
    
    do {
        if (num === 1) {
            break;
        } else if (num % 2 === 0) {
            num = num /= 2;
            console.log(`짝수일때 ${num}`);
        } else {
            num = (num * 3) + 1;
            console.log(`홀수일대 ${num}`);
        }
        
        answer++;

        if (answer >= 500) {
            return -1;
        }

    } while (num > 1)

    return answer;
}


console.log(solution(626309));