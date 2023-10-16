function mutiplyBy(num) {
    return function(x) {
        return x * num;
    }
}

function add(x, y) {
    return x + y;
}

const mutiplyByTwo = mutiplyBy(2);
const mutiplyByThree = mutiplyBy(3);

console.log(mutiplyByTwo(100));

const result = add(mutiplyByTwo(5), mutiplyByThree(10));
console.log(`result = > ${result}`);