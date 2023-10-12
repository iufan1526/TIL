// 객체

// 기본적인 객체생성 방법
let person = {
    name : "홍길동"
    , age : 10
}

let person2 = {
    gender : "남성"
}

// 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("김승태", 20, "남자");


// 접근방법
console.log(person.name);

// 객체 메소드(객체가 가진 여러가지 기능)
let keys = Object.keys(person);
let values = Object.values(person);

//entries
// key, value를 묻어 배열로 만든 배열 (2차원배열)
let entries = Object.entries(person);
console.log(entries);

// assign 객체 복사
let newPerson = {};
Object.assign(newPerson, person, {age : 31});
console.log(newPerson);


// ... spread 
let perfectMan = {...person, ...person2};
console.log(perfectMan);