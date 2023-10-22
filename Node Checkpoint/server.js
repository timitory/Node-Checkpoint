    var http =require('http');
    var fs=require('fs');
    var url=require('url');

    http.createServer(function (request,response){
        var pathname=url.parse(request.url).pathname;

        console.log('Request for' + ' ' + pathname + 'received');

        fs.readFile(pathname.substring(1),function(err,data){
            if (err){
                console.log(err);
                response.writeHead(404,{'Content-Type':'text/html'});
            } else{
                response.writeHead(200,{'Content-Type': 'text/html'}
                );

            response.write(data.toString());
            }
            response.end();
        });
    }).listen(3000);
    console.log('server running at http://localhost:3000/index.html');