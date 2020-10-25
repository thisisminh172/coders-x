//clousure //garbage collector //design pattern
function sum(a,b){
    const c = a+b;
    return function(){
        console.log(c);//c co the truy cap bien c o tren
    };
}
sum(1,2)();
//ung dung cua closure
function debug(name){
    return function(str){
        console.log(`[${name} ${str}]`);
    }
}

const log = debug('Mouse');
log('Error happened');