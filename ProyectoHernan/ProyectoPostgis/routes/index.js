var express = require('express');
var router = express.Router();

 
var dolar=require('/Users/comparaonline/devel/TestComparaOnline/ProyectoHernan/ProyectoPostgis/dolar/dolar_today_bd');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ComparaOnline' });
});


router.get('/dolar', function(req, res) {
 
  dolar.dolar_today(res);

});






module.exports = router;
