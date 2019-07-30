var httpServer = require('http')//importing using require
var url = require('url')


var myServer = httpServer.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html'})
    response.write('<h1>Hello from Reeves</h1>')
    response.write('<br><br>')
    response.write('In new line')
    console.log("#########################################################")
   var myUrl=url.parse(request.url, true).query
   // var myQuey = myUrl.query
    var receivedName= myUrl.name
    var receivedLocation= myUrl.location
    console.log(receivedName + " from " + receivedLocation);
    //console.log(response);
    //console.log("**************************")
    //console.log(request);
    console.log("#########################################################")
    response.write("<br>")
    response.write("Name: " +receivedName)
  
    response.write("<br>")
    response.write("Location: " +receivedLocation)
    response.end()
}).listen(1300)//for port number

// myServer holds the instance of createServer