var httpServer = require('http')
var file = require('fs')

var myServer = httpServer.createServer((request, response)=>{
    file.readFile("good1.txt", (error, data)=>{
        if(error){
            throw error
        }
        file.writeFile("good2.txt", data, (error)=>{
            console.log(error);
        })
        var fileContent = data
        response.writeHead(200, {'content-Type' : 'text/html'})
        response.write('<h1>File Copy Done</h1>')
        response.write("<h5>" +data+ "</h5>")
        response.end()
    })
}).listen(1400)






