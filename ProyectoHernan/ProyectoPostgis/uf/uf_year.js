
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
