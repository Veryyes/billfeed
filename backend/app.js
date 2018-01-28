var express = require('express')
var app = express()
var path = require('path')
var fetch = require('node-fetch')

app.use(express.static(path.join(__dirname,"public")))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/:zip', function(req, res){
	console.log("TEST");
	zip = req.params.zip;
    url = "http://whoismyrepresentative.com/getall_mems.php?zip="+zip+"&output=json"
	fetch(url).then(
     function (response) {
                return response.json()
            }).then(function (response) {
                console.log(response.results)
				res.send((response.results))
		})
})

app.listen(3000)
console.log('BackEnd Running!!')
