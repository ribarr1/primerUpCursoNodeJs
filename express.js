var express = require('express')
var app = express()
 

 //funcion para enviar a un navegador la salida
/*app.get('/', function (req, res) {
  res.send('Hello World')
})*/


app.use(express.static(__dirname + '/public'))
 
app.listen(3000)