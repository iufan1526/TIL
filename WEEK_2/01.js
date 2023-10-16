// 구조분해 할당
// 배열이나 객체 속성을 분해해서 그값을 따로 사용할수 있게 한다.

//1. 배열의 경우
let [value1, value2] = [1, "kim"];
console.log(value1);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d = 4] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);


//2. 객체의 경우

let person = {
    name : "kim"
    , age : 10
}

let {name, age} = person;
console.log(name, age);

let {
    name: newName,
    age : newAge
} = person

console.log(newName, newAge);
