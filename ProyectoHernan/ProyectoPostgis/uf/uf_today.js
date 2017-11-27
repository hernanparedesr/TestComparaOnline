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
