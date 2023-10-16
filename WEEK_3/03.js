// 호이스팅 (실별자를 끌어올린다.)
// 일반적인 예상 결과 오류 -> 'bbb' -> func b

function a () {
    console.log(b);
    var b = 'bbb';
    console.log(b);
    function b () {

    }
    console.log(b);
}

a();

// 실행결과 func b -> 'bbb' -> 'bbb'