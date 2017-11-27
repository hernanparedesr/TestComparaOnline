function dolar_today(res) {
 
  var pg = require('pg');
  var conString = "microservicio://compara:compara123@localhost/microservicio";

  var dolar_query = "select date,value from dolar_value where date = '2017-11-27'"
    
  var client = new pg.Client(conString);
  
    client.connect();
    var query = client.query(dolar_query);
  
    
    query.on("row", function(row, result){
      result.addRow(row);
    });
  
    query.on("end", function(result){
      res.json(result.rows[0]);
      res.end();
    });
  }

  exports.dolar_today=dolar_today;