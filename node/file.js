var file = require('fs')

file.readFile('hello1.txt', 'utf-8' ,function(error, data){
    if(error){
        console.log(error);
        throw error
    }
    var fileContent=data.toString()
    console.log(data.toString());
    file.writeFile("hello2.txt", fileContent, function(error){
        console.log(error);
    })
})