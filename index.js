var express = require('express');
var app = express();
var http = require('http').Server(app);

var port = process.env.PORT || 8000;



var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.use('/public', express.static(__dirname + '/public'));

app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods','GET,HEAD,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers','Content-Type,Authorization');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept");
	
	next();
});

app.get('/', function(req, res) {
	//res.send("API REGARDING XrayApp");
	res.sendFile(__dirname + '/index.html');
});

http.listen(port, function(){
	
  console.log('listening on *:' + port);
});
