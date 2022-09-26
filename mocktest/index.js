var express = require('express');
const res = require('express/lib/response');
var app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }))

app.get('/Ingreso/:fecha/:hora/:valor/:tarifa/:vehiculo', function(req,resp){
    let response = new Array();
    let fecha= req.params.fecha;
    let valor= req.params.valor;
    let vehiculo=req.params.vehiculo;

    response.push('1234567890');
    response.push('987654321');
    response.push(fecha);
    response.push(valor);
    response.push(vehiculo);
    
    resp.set('Content-Type','text/plain')
    resp.send(response)
});

app.listen(3000)