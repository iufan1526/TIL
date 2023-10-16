// this
// 런타임을 고려해야함 (코드가 돌아가는 시간)
// 전역 환경에서 this는 -> 노드(global 객체) , 브라우져(window 객체)

// 함수는 주체가 없고 독립적으로 실행됨 => 함수에서 this는 무족건 전역을 참조함 (메서드 내부에서 호출해도 예외는 아니다)
// 메서드는 주체가 있다. => 메서드에서 this는 해당 주체를 참조함

var obj1 = {
    outer : function() {
        console.log(this); // obj1

        var innerFunc = function() { // outer
            console.log(this);           
        };

        innerFunc();

        var obj2 = { 
            innerMethod : innerFunc
        }
        obj2.innerMethod();
    }
}
obj1.outer();


// 전역 바인딩을 피해가는 바업
// slef를 이용한다.
// 화살표 함수를 사용 => thisBinding 과정이 없다.
// 콜백함수도 함수기때문에 전역객체를 바라본다 
