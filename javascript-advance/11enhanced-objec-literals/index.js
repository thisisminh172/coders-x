//enhanced object literals
const name = 'Tom';
const cat = {
    name,
    run(){
        console.log(`${this.name} is running`);
    }
};
cat.run();