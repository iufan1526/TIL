const random = 5;

function solution(num) {   
    if (random < num) {
        return "DOWN";
    }else if (random > num) {
        return "UP";
    }else if (random === num) {
        return "CORRECT"
    }
}

console.log(solution(10));