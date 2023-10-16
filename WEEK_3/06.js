// 유사배열
var obj = {
    0 : "a",
    1 : "a",
    2 : "a",
    3 : "a",
    length : 10
}
console.log(Array.from(obj));

// 유사배열을 진짜 배열로 만들어준다.
var newArray = Array.from(obj);

console.log(newArray.length);