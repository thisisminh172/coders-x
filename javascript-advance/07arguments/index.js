//array like object & arguments
/*
const names = ['Thanh','MInh','Trung'];
for(let i = 0; i<names.length; i++){
    console.log(names[i]);
}
*/

//array like object
/*
const obj = {
    0:'Thanh',
    1: 'Trang',
    2: 'Trung',
    length : 3
};
for(let i = 0; i<obj.length; i++){
    console.log(obj[i]);
}
*/

function sum(){
    // let result = 0;
    // for(let i = 0; i< arguments.length; i++){
    //     result += arguments[i];
    // }
    // return result;

    const numbers = Array.from(arguments);
    return numbers.reduce(function(sum,num){
        return sum+num;
    },0);
}
console.log(sum(1,2,34,432,4,35,43,234));
