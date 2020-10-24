//call
//apply
/*
function greeting(name,age){
    console.log(`Hi! ${this.name}, I am ${this.age}`);
}

var cat = {
    name: 'Tom',
    age: '100'
}
//khac bind, bind tra ve hàm, call gọi 1 ham
greeting.apply(cat);
*/

function sum(){
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum+num , 0);
}
function average(){
    //sum
    const x = sum.apply(null, arguments);

    //sum/ arguments.length
    return x/arguments.length;

}

console.log(average(1,2,3));