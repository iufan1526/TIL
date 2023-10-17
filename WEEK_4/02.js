// 무슨 제어권을 ?
// 1. 호출 시점에 대한 제어권
let count = 0;

var timer = setInterval(function() {
    console.log(count);
    if (++count > 4) clearInterval(timer); 
},300);

// 2. 인자에 대한 제어권
const newArray = [10, 20, 30].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
});

console.log(newArray);

