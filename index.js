var express = require('express');
require('dotenv').config();
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
    valorPaga:''
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

     crearFactura.crearFactura(documento,1,5000,(data,responseclient)=>{
         let data_resp=data.toString();
         let arrayResp=data_resp.replace(/\[|\]/g,'').replaceAll('"','').split(',');
        clienteIonfo.factura=arrayResp[0];
        clienteIonfo.valorPaga=arrayResp[1];
       resp.render('index',clienteIonfo);
    });
    
})

app.listen(8080);