const inputArr = process.argv;
var sum = 0;
for (var i = 2; i < inputArr.length; i++) {
    sum += Number(inputArr[i]);
}
console.log(sum);
