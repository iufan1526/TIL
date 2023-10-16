// 명시적 this 바인딩
// call, apply, bind

// call
var func = function(a, b, c) {
    console.log(this, a, b, c);
}
// 기본 바인딩
func(1, 2, 3);


// 명시적 binding
func.call({x : 1},4, 5, 6,);

var obj = {
    a : 1,
    method : function(x, y) {
        console.log(this.a, x, y);
    }
}
obj.method.call({a : 4},10, 20);

// apply
// call이랑 똑같은데 매개변수를 []로 묶어준다
obj.method.apply({a : 4},[10, 20]);