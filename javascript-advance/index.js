//method overriding
class CoffeeMachine{
    makeCoffee(){
        console.log('making coffee...');
    }
}

class SpecialCoffeeMachine extends CoffeeMachine{
    makeCoffee(cb){
        console.log('makeing coffee and do something...');
        cb();
    }
}

const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee(() => {console.log('Call the boss...');});


