//class

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     eat(){
//         console.log(`${this.name} is eating...`);
//     }
// }

// class Bird extends Animal{
//     fly(){
//         console.log('Flying...');
//     }
// }

// class Parrot extends Bird{
//     speak(){
//         console.log('Speaking...');
//     }
// }

// const bird = new Parrot('Sao Nau');
// bird.speak();

function Animal(name){
    this.name = name;
    
}

Animal.prototype.eat = function(){
    console.log('Eating...');
}

function Bird(name){
    Animal.apply(this, arguments);
}

Bird.prototype = new Animal();
const bird = new Bird('Sao');

bird.eat();
console.log(bird.name);


