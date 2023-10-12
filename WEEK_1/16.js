// 배열

// 생성법
let fruits = ["사과", "바나나", "딸기"];

// 크기지정 생성
let numbers1 = new Array(5);

// 요소 접근 -> 인덱스로 접근
fruits[0];
fruits[1];
fruits[2];

// push 맨 마지막에 삽입
fruits.push("오랜지");

// pop 마지막 요소를 없앰
fruits.pop();

// shift 맨앞에 요소를 없앰
fruits.shift();

// unshift 맨앞에 요소를 넣는다
fruits.unshift("포도");

// splice ? ~ ? 까지 삭제하고 새로운 요소를 넣어줘
fruits.splice(1, 1, "포도");

// slice  ? ~ ? 까지 잘라서 새로운 배열로 반환


// forEach, map, filter, find
let numbers = [1, 2, 3, 6 ,4, 5];

numbers.forEach(function(item) {
    console.log(item);
});

// map
let newNumbers = numbers.map(function(item) {
    return item * 2;
});

console.log(newNumbers);

// filter
let filteredNumbers = numbers.filter(function(item) { return item === 5; });
console.log(filteredNumbers);

// find 첫번째 조건만 반환
numbers.find(function(item) { return item > 3;});

