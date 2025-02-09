const fs  = require('fs');

//read file
/*fs.readFile('./Docs/docs.txt', (err, data) => {//it takes two arguments the file and function toperform any action on the file , that function takes in the error incase of error and the data that is retrieved or the file
    // all of the fs stuf is asynchronous which means we can execute other code without waiting for it
   if(err){
    console.log(err);
   }
   console.log(data.toString());
})*/

//write file
/*fs.writeFile('./Docs/docs.txt', 'Hello World', ()=>{
    console.log('file was written indeed')
}) */

//diectories
/*if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=> {
       if(err){
        console.log(err);
       }
       console.log('created');
    });
}   else {
    fs.rmdir('./assets', (err) => {
        if (err){
            console.log(err);
        }

        console.log('deleted');
    })
}
*/


//delete file
/*if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlinkSync('./docs/deleteme.txt', (err)=> {
        if (err){
            console.log(err);
        }
        console.log('deleted');
    });
}*/
