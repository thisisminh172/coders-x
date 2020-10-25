//destructuring ap dung cho array object
const arr = [10,20,30,40,50];

//const [a, , ,d] = arr;
// console.log(d);

const obj = {
    a:1,
    b:2,
    c:3
};
const {a,...c} = obj;
console.log(a,c);
