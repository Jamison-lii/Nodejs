//Streams read data from a while bit by bit into like packets called buffers and the main aim is so that maybe
//when you are developing an application you ma need to read data from a file but it may take time to read it alll at once and so 
//creating a stream will help you read it little by little and display the remaining chunks

const fs =require("fs");

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/*readStream.on('data', (chunk)=>{
     console.log('--------NEW CHUNK---------');
     console.log(chunk);
     writeStream('\n NEW CHUNK \n');
     writeStream.write(chunk);
})*/


//piping another way of doing that commented code above is shown below
readStream.pipe(writeStream)


