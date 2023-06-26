const http = require('http');

host = '127.0.0.1';
port = '3000';

class Model
{
    evalInput( input )
    {
        return eval( input );
    }
}

function processRequest( request, response )
{
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if( request.method == 'GET' )
    {
        let body = [];
        request.on('data', (chunk) => 
        {
            body.push(chunk);
        }).on('end', () => 
        {
            let model = new Model();
            body = Buffer.concat(body).toString();

            response.writeHead(200,{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
            const data = { message: model.evalInput( body.replace(/"/g, '') )};
            response.end(JSON.stringify( data ));

            console.log( 'POST response: ',data.message )
        });        
    }
    else if( request.method == 'POST' )
    {
        let body = [];
        request.on('data', (chunk) => 
        {
            body.push(chunk);
        }).on('end', () => 
        {
            let model = new Model();
            body = Buffer.concat(body).toString();

            response.writeHead(200,{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
            const data = { message: model.evalInput( body.replace(/"/g, '') )};
            response.end(JSON.stringify( data ));

            console.log( 'POST response: ',data.message )
        });        
        
        
    }

}

http.createServer( processRequest ).listen( port,host );