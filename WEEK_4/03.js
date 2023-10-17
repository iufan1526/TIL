Array.prototype.map123 = function(callback, thisArg) {
    let returmMap = [];

    for (let i = 0; i < this.length; i++) {
        var returnValue = callback.call(thisArg || globalThis, this[i]);

        returmMap[i] = returnValue;
    }

    return returmMap;
};

const newArray = [1, 2, 3].map123(function(numbers) {
    return numbers * 2;
});

console.log(newArray);