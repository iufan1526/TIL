const myArray = [3, 5, 6, 1, 2, 4];

let maxValue = myArray[0];

for (let i = 1; i < myArray.length; i++) {
    if (maxValue < myArray[i]) maxValue = myArray[i];
}

console.log(maxValue);