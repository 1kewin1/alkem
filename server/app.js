var express = require('express');
const bodyParser = require('body-parser');
var app = express();
var routes = require("./index");
const https = require('https');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text({ type: 'x-www-form-urlencoded' }))
/*app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }))
app.use(bodyParser.text({ type: 'x-www-form-urlencoded' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.json({ type: 'application/*+json' }))*/

/*const https = require('https');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
 	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	    res.setHeader('Access-Control-Allow-Credentials', true); 
    next();
});


app.post('/getUserData', function(req, res){	
	console.log(req.body);
	res.send(req.body);
});*/

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
 	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	    res.setHeader('Access-Control-Allow-Credentials', true); 
    next();
});

app.use('/', routes);


var port = process.env.PORT || 3000; 
app.listen(3000, function (){
	console.log(`Port ${port} is running ...`);
});