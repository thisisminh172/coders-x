//...rest
function log(a,...numbers){
    console.log(a);
    console.log(numbers);
}

function sum(...numbers){
    return numbers.reduce((a,b)=>{
        return a+ b;
    },0);
}

console.log(sum(1,2,3,4));

function concat(separator,...strings){
    return strings.join(separator);
}
console.log(concat('.','a','b','c'));
