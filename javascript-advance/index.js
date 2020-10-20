//function context & bind
//bind sẽ truyền nội dung của 1 object vào function gọi nó
var mouse = {
    name: 'Mickey',
    sayHi: function(){
        console.log('Hi, my name is ', this.name);
    }
};
var cat = {
    name: 'Tom'

};
// var say = mouse.sayHi.bind(mouse);
var say = mouse.sayHi.bind(cat);
say();