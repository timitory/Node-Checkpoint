var fs =require('fs');
var buf=new Buffer.alloc(1024);
console.log('WE are about to open a file');

fs.open('welcome.txt','r+',function(err,fd){
    if(err){
        console.error(err);
    
    }
    console.log('File opened Succesfully');
    console.log('We can now proceed in reading the file below');

fs.read(fd,buf,0,buf.length,0,function(err,bytes){
    if(err){
        console.error(err);

    }
    console.log('the bytes read is'+ bytes);
    if (bytes>0){
        console.log(buf.slice(0,bytes).toString());

    }
});
});