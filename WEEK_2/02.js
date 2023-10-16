// 단축 속성명 : property shorthand
// key, value가 동일하면 생략하여 하나만 적을수 있다.
const name = "abc";
const newAge = 30;

const obj = {
    name,
    newAge
}


// 전개구문 = spread
let arr = [1, 2, 3];   
console.log(arr);
console.log(...arr);

let newArray = [...arr, 4];
console.log(newArray);

// 객체에서 전개구문
let user = {
    name : "abc",
    age : 20
}

let user2 = {...user, gender : 'man'};

console.log(user2);



// 나머지 매개변수 
function exampleFunc(a, b, c, ...args) {
    console.log(a, b, c);
    console.log(...args);
}

exampleFunc(1, 2, 3);


// 템플릿 리터넛
console.log(`hello world ${3 + 3}`);