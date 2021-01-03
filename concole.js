console.time("sum");
var count = 0;
var sum = 0;
for(var i=0;i<1000000;i++){
    sum += i;
    count ++;
}
console.log(count);
console.log(sum);
console.timeEnd("sum");
