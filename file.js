const fs  = require('fs');

fs.readFile('./Docs/docs.txt', (err, data) => {//it takes two arguments the file and function toperform any action on the file , that function takes in the error incase of error and the data that is retrieved or the file
    // all of the fs stuf is asynchronous which means we can execute other code without waiting for it
   if(err){
    console.log(err);
   }
   console.log(data.toString());
})