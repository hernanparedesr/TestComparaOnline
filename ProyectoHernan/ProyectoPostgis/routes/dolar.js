const fetch = require("node-fetch");
const url =
  "http://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=2a5a92298fecf09c1472b9e657b5e856709303fe&formato=json";


  fetch(url)
  .then(response => {
    response.json().then(json => {
     
      console.log(
        `Valor: ${json.Dolares[0].Valor} -`,
        `Fecha: ${json.Dolares[0].Fecha}`
      );
    });
  })
  .catch(error => {
    console.log(error);
  });