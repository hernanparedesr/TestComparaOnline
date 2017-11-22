var express = require('express');
var router = express.Router();

  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ComparaOnline' });
});

const fetch = require("node-fetch");
const dolar_today =
  "http://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";

router.get('/dolar_today', function(req, res) {
  fetch(dolar_today)
  .then(response => {
    response.json().then(json => {
     
      res.json(json);
    });
  })
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
