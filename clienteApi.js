var Client = require('node-rest-client').Client;
var await =require("await");
var client = new Client();

const HOST="http://localhost:3000";
var responseService = await('dataresp');

function crearFactura(clienteIonfo){
 
  let fetaCompleta=clienteIonfo.fecha.split("T");
  let fecha=fetaCompleta[0];
  let hora =fetaCompleta[1];
  let valor ="4.000";
  let tarifa ="2.000";
  let vehiculo =clienteIonfo.placa;
  
  let argumentos={
    path:{
        fecha:fecha,
        hora:hora,
        valor:valor,
        tarifa:tarifa,
        vehiculo: vehiculo

    }
  } 


    client.get(HOST+"/Ingreso/${fecha}/${hora}/${valor}/${tarifa}/${vehiculo}",argumentos, function (data, response) {
        let data_resp=data.toString();
        let arrayResp=data_resp.replace(/\[|\]/g,'').split(',');
        responseService.keep("dataresp",arrayResp)
    });

    
    responseService.then(function(data){
        return data;
      })
      
}




module.exports = {
    crearFactura
}

