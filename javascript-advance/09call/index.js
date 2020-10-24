//call

function greeting(name,age){
    console.log(`Hi! ${this.name}, I am ${this.age}`);
}

var car = {
    name: 'Tom',
    age: '100'
}
//khac bind, bind tra ve hàm, call gọi 1 ham
greeting.call(cat);