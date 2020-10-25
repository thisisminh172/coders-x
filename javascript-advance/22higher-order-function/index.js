//higher order function
function waitAndRun(ms, func){
    setTimeout(func,ms);
}
function run(){
    console.log('Run');
}

waitAndRun(2000,run);