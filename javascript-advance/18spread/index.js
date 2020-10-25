//spread
const a = [1,2,3];
const b = [0,...a,4];
console.log(b);
function sum(...numbers){
    console.log(numbers);
}
sum(...a);
