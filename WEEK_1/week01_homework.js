function solution(s) {

    let pLength = s.split("").filter((item) => item === 'p' || item === 'P').length;
    let yLength = s.split("").filter((item) => item === 'y' || item === 'Y').length;
    
    if (pLength === yLength || (pLength === 0 && yLength === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(solution("ooo"));

function solution2(absolutes, signs) {
    let answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
    }

    return answer;
}

let absolutes = [4, 7, 12];
let signs = [true, false, true];

console.log(solution2(absolutes, signs));