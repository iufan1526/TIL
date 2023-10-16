// 불변성을 유지하는 방법
// 참조형을 그냥 복사해버리면 같은 주소를 가르키기때문에 속성을 변경시 예상과 다른 결과를 낳을수 있다.

// 기존방식
const user = {
    name : "홍길동",
    age : 20
}

function changeName(user, newName) {
    const newUser = user;

    newUser.name = newName;

    return newUser;
}

const newUser = changeName(user, "김서방");

console.log(newUser);
console.log(user);
// 기존 user객체의 정보도 변경되었다!!


// 얕은복사
const user2 = {
    name : "홍길동",
    age : 20
}

function copyObject(obj) {
    let newObj = {};

    for (const key in obj) {
        newObj[key] = obj[key];
    }

    return newObj;
}

const newUser2 = copyObject(user2);
newUser2.name = "안서방";

console.log(newUser2);
console.log(user2);
// 새로운 객체를 반환시켜 완전히 다른 객체를 만든다
// 그러나... 중접객체에 대한 복사에 대해선 완벽히 복사가 되지 않는다

// 깊은복사
// 재귀적으로 수행해줘야 가능하다
const user3 = {
    name : "홍길동",
    age : 20,
    urls : {
        naver : "naver.com",
        google : "google.com"
    }
}

function copyObject2(obj) {
    let newObj = {};

    if (typeof obj === 'object' || obj !== null) {
        for (const key in obj) {
            newObj[key] = copyObject2(obj[key]);
        }
    } else {
        newObj = obj;
    }
  
    return newObj;
}

console.log(copyObject2(user3));