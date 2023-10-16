const inputValue = "abc";

function solution(inputValue) {

    let box = inputValue[0];
    let answer = "";
    let count = 0;

    for (let i = 1; i < inputValue.length; i++) {
        if (box === inputValue[i]) {
            count++;
        }
    }
}

solution(inputValue);
