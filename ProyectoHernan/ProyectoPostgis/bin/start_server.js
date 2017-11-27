

function start(res) {
  /**
 * Se conecta a la bd.
 */
  var pg = require('pg');
  var conString = "microservicio://compara:compara123@localhost/microservicio";
  var client = new pg.Client(conString);
  
  client.connect();

  /**
 * Se traen los datos desde la API.
 */
  const fetch = require("node-fetch");
  const dolar_today =
  "http://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";
  

  fetch(dolar_today)
  .then(response => {
    response.json().then(json => {

      var value = json.Dolares[0].Valor;
      var date = json.Dolares[0].Fecha;
      /**
      * Se hace la consulta si el valor de la fecha actual se encuentra en la bd, aun no esta integrada la variable de la fecha actual.
      */
      var test = "select count(*) from dolar_value where date = '2017-11-27'"
      
      var consulta = client.query(test);
    
      consulta.on("row", function(row, result){
        result.addRow(row);
      });
    
      consulta.on("end", function(result){ 
        var cont = result.rows[0].count;
        console.log(cont);

        if (cont>0)
        {
          console.log("Servidor de MoneyApp está listo");
        }
        else
        {
          client.query('INSERT into dolar_value (value, date) VALUES($1, $2)', [value, date]);
          console.log("Servidor de MoneyApp está listo");
          console.log("BBDD actualizada.");
        }
      });
     
      
      /**
      * variable que me trae la fecha actual.
      */
      var hoy = new Date().toJSON().slice(0,10);
      console.log(hoy);
    });
  })
  .catch(error => {
    console.log(error);
  });
  
  
}

  

 
  exports.start=start;