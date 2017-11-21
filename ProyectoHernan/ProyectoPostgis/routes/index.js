var express = require('express');
var router = express.Router();

  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ComparaOnline' });
});

const fetch = require("node-fetch");
const url =
  "http://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";

router.get('/dolar_actual', function(req, res) {
  fetch(url)
  .then(response => {
    response.json().then(json => {
     
      res.json(json);
    });
  })
});

const urlUF =
"http://api.sbif.cl/api-sbifv3/recursos_api/uf?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";

router.get('/uf_actual', function(req, res) {
  fetch(urlUF)
  .then(response => {
    response.json().then(json => {
     
      res.json(json);
    });
  })
});


const urlUF_years =
"http://api.sbif.cl/api-sbifv3/recursos_api/uf/2017?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";

router.get('/uf_2017', function(req, res) {
  fetch(urlUF_years)
  .then(response => {
    response.json().then(json => {
     
      res.json(json);
    });
  })
});



module.exports = router;
