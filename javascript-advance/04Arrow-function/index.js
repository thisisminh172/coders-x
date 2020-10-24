//arrow function
// var sum = (a,b) =>{
//     console.log(a+b);
// };
// sum(1,3);

// var a = {
//     name: 'AAA',
//     run: function(){
        
//         var run2 = () => {
//             console.log(this.name);
//         };
//         run2();
//     }
// }

// a.run();

var a = {
    foo: 'bar',
    run: function(){
        setTimeout(()=>{
            console.log(this.foo);
        }, 2000);
    }
};
a.run();