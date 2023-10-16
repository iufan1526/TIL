const strArray = ["sun", "bed", "car"];

function solution1(strArray, n) {

    let newArray = [];
    let returnArray = [];

    for (const str of strArray) {
        newArray.push(str[n] + str);
    }

    newArray.sort();

    for (const str of newArray) {
        returnArray.push(str.substr(1, newArray.length));
    }
    
    return returnArray;
}

console.log(solution1(strArray, 1));
