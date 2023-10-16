// 일급객체로서의 함수

// 1. 변수에 함수를 할당할수 있다.
// 함수가 마치 값으로 취급
// 나중에 사용될수 있도록 준비중
const sayHello = function() {
    console.log(`hello`);
}

// 2. 함수를 다른 함수의 인자로 전달할수 있다.
// 2-1 콜백함수 : 매개변수로써 쓰이는 함수
// 2-2 고차함수 : 함수를 인자로 받거나 리턴하는 함수
function callFunc(func) {
    // 매개변수로 받은 함수를 이용하여 처리한다.
    func();
}

callFunc(sayHello);

// 3. 함수를 반환할수 있다
function createAddress(num) {
    return function(x) {
        return x + num;
    }
}

const addFive = createAddress(5);
console.log(addFive(10));


// 일급객체로서의 함수2
const person = {
    name : "john",
    age : 30,
    isMarrid : true,
    sayHello : (function() {
        console.log(`Hello My name is ${this.name}`);
    })
}

person.sayHello();