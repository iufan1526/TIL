//2. String (문자형)
let str = "abc";
console.log(str);
console.log(typeof str);

// 문자열 길이 확인
console.log(str.length);

// 문자열 결합하기
let str1 = "hello";
let str2 = "world";
console.log(str1.concat(str2));

// 문자열 자르기
let str3 = "hello, World";
console.log(str3.substr(7, 5));
console.log(str3.slice(7, 12));

// 문자열 검색
let str4 = "hello, World";
console.log(str4.search("World"));

// 문자열 대체
let str5 = "hello, World";
let result01 = str5.replace("World", "javascript");
console.log(result01);

// 문자열 분할;
let str6 = "hello, World";
let result02 = str6.split(",");
console.log(result02);