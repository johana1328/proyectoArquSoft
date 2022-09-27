var Client = require('node-rest-client').Client;
const date = require('date-and-time')

var client = new Client();

const HOST=process.env.HOST;

function crearFactura(documento, vehiculo, valor, funcionExecute){
  let fecha= new Date();
  const fulldate = date.format(fecha,'YYYY-MM-DD HH:mm');
  
  let argumentos={
    path:{
        documento:documento,
        fecha:fulldate,
        vehiculo: vehiculo,
        valor:valor
    }
  } 

 client.registerMethod("getFactura",HOST+"/Ingreso/${documento}/${fecha}/${vehiculo}/${valor}","GET");

  client.methods.getFactura(argumentos,funcionExecute);
  

}

module.exports = {
    crearFactura
}

