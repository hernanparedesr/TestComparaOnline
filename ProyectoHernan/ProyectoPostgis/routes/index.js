var express = require('express');
var router = express.Router();

var pg = require('pg');
var conString = "microservicio://compara:compara123@localhost/microservicio";
var dolar_query = "SELECT row_to_json(fc) FROM ( SELECT array_to_json(array_agg(f)) As Datos FROM ( SELECT row_to_json((value, date)) As dolar FROM dolar_value As lg) As f) As fc"  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ComparaOnline' });
});

router.get('/datos', function(req, res) {
 
  var client = new pg.Client(conString);
  
  client.connect();
  var query = client.query(dolar_query);

  query.on("row", function(row, result){
    result.addRow(row);
  });

  query.on("end", function(result){
    res.json(result.rows[0].row_to_json);
    res.end();
  });

});


const fetch = require("node-fetch");
const dolar_today =
  "http://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";

router.get('/dolar_today', function(req, res) {
  
  var client = new pg.Client(conString);
  client.connect();

  fetch(dolar_today)
  .then(response => {
    response.json().then(json => {
     
      var value = json.Dolares[0].Valor;
      var date = json.Dolares[0].Fecha;
      res.json(json);
      client.query('INSERT into dolar_value (value, date) VALUES($1, $2)', [value, date]);
    });
  })
  .catch(error => {
    console.log(error);
  });
  

});

const euro_today =
  "http://api.sbif.cl/api-sbifv3/recursos_api/euro?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";

router.get('/euro_today', function(req, res) {
  fetch(euro_today)
  .then(response => {
    response.json().then(json => {
     
      res.json(json);
    });
  })
});

const UF_today =
"http://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";

router.get('/uf_today', function(req, res) {
  fetch(UF_today)
  .then(response => {
    response.json().then(json => {
     
      res.json(json);
    });
  })
});


const UF_year =
"http://api.sbif.cl/api-sbifv3/recursos_api/uf/2017?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";

router.get('/uf_2017', function(req, res) {
  fetch(UF_year)
  .then(response => {
    response.json().then(json => {
     
      res.json(json);
    });
  })
});



module.exports = router;
