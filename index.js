var express = require('express');
var crearFactura = require('./clienteApi.js')
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }))


const clienteIonfo={
    documento:'',
    placa:'',
    fecha:'',
    factura:'',
    nombre:'Juana Ruiz',
    valorPaga:'5.000'
};

app.get('/',(req, resp)=>{
    
    resp.render('index',clienteIonfo);
});

app.post('/',(req, resp)=>{
    let placa = req.body.placa;
    let documento = req.body.documento;
    let fecha = req.body.fecha;

    clienteIonfo.documento=documento;
    clienteIonfo.placa=placa;
    clienteIonfo.fecha=fecha;
    let respclinet= crearFactura.crearFactura(clienteIonfo);
    
    console.log(respclinet)
    resp.render('index',clienteIonfo);
})

app.listen(8080);