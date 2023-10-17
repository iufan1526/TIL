// Set 자료구조
// 고유한 값을 저장하는 자료구조
// 값만 저장한다 
// 키는 저장하지 않는다.
// 값이 중복되지 않는 유일한 요소
// 값 추가, 삭제, 검색, 모든 값 제거, 존재 여부

const mySet = new Set();

mySet.add('value1');
mySet.add('value2');
mySet.add('value3');
mySet.add('value4');
mySet.add('value5');

mySet.values
console.log(mySet.size);
console.log(mySet.has('value1'));


// 반복자
for (const value of mySet.values()) {
    console.log(value);
}
