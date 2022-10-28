let arr = [1,1,1];
let arrEqual = true;

for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
        arrEqual = false;
    }
}

console.log(arrEqual)