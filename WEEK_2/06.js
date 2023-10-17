// Map
// Key, Value 를 저장한다.
// Key에 어떤 데이터 타입도 다 사용될수 있다.
// Key가 정렬된 순서로 저장된다.
// 검색, 삭제, 제거, 여부 확인 

const myMap = new Map();

// 저장
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

// 불러오기
myMap.get('');


// 반복을 위한 api가 있다. keys, values, entries


console.log(myMap.keys());
for (const key of myMap.keys()) {
    console.log(key);
}

console.log(myMap.values());
for (const value of myMap.values()) {
    console.log(value);
}

console.log(myMap.entries());
for (const value of myMap.entries()) {
    console.log(value);
}

console.log(myMap.entries());
console.log(myMap.has("two")); // key기반 겂색



