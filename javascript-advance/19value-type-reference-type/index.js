//spread
let a1 = 1;
let a2 = 1;
console.log(a1===a2);//so sanh gia tri

let obj1 = {a: 1};//bien obj1 chi la chua dia chi của object này
let obj2 = {a: 1};
console.log(obj1===obj2);

let a3 = a2;
console.log(a3===a2);

let obj3 = obj2;//gan address, nen a nay la cua obj2
console.log(obj3===obj2);
obj3.a = 2;
console.log(obj2);
console.log(obj3===obj2);

function log(x){
    x.b = 5;
}
log(obj1);

console.log(obj1);