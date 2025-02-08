const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  console.log('request made');
  console.log(req.url,req.method);


  
res.setHeader('Content-Type', 'text/html');

/*res.write('<p>hello, ninjas<p/>');
res.write('<p>hello, again ninjas<p/>');
res.end();*/
fs.readFile('./views/index.html', (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        res.write(data);
        res.end();
    }
})

});


server.listen(3000, 'localhost', function(){
    console.log('listening on port 3000');
})