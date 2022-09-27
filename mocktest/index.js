var express = require('express');
const res = require('express/lib/response');
var app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }))


app.get('/Ingreso/:documento/:fecha/:vehiculo/:valor', function(req,resp){
    let response = new Array();
    let valor= req.params.valor;

    response.push(getRandomInt());
    response.push(valor);
    response.push(true);
    
    resp.set('Content-Type','text/plain')
    resp.send(response)
});

function getRandomInt() {
  return Math.floor(Math.random() * 899999999999 + 100000);
}

app.listen(3000)