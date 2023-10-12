// 형 변환

// 암시적 형변환
// 1-1 문자열
let result1 = 1 + "1";
console.log(result1);
console.log(typeof result1);

let result2 = true + "1";
console.log(result2);
console.log(typeof result2);

// + 는 문자열로 형변환됨


// 1-1 숫자
let result3 = 1 - "2";
console.log(result3);
console.log(typeof result3);

let result4 = "2" * "2";
console.log(result4);
console.log(typeof result4);

// + 연산자를 제외한 / , * , - 는 숫자가 우선시됨


// 명시적 형변환
// 2-1 Boolean
console.log(Boolean(1));
console.log(typeof Boolean(1));
console.log(Boolean(NaN));
console.log(typeof Boolean(1));
console.log(Boolean(undefined));
console.log(typeof Boolean(1));

// 2-2 문자열
console.log( String(123));
console.log(typeof String(123));


// 2-3 숫자형
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);
