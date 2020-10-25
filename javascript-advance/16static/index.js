//static
class Foo{
    static someMethod(){
        console.log('some method')
    }
    anotherMethod(){
        console.log('another method');
    }
}

const foo = new Foo();
foo.anotherMethod();
Foo.someMethod();
