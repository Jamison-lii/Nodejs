setTimeout(()=>{
    console.log('in the timeout');
    clearInterval(int);//stps the second one from running after the third second
}, 3000);

const int = setInterval(()=>{
    console.log('in the interval');
}, 1000)

console.log(__dirname)
console.log(__filename)