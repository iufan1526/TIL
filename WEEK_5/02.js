// 클래스 만들어보기
class Person {
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // 메서드 만들기
    sayHello () {
        console.log(`${this.name} Hello`);
    }
}

// 인스턴스 만들기
const person1 = new Person('김승태', '20', '남성');

person1.sayHello()