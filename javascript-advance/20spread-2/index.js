//spread part 2
const a = [1,2,3];
const b = [0,...a,4];
console.log(b);

//spread an object
const obj1 = {
    a:1,
    b:2,
    c:3,
    d:{e:10}
};

let obj2 = {
    ...obj1,
    z:1000
};
// for (let key in obj1){
//     obj2[key] = obj1[key];
// }

obj2.d.e = 5;

//deep clone
console.log({obj1,obj2});

