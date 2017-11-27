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