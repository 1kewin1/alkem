var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
module.exports = {		
	createRemedy : function(req, res){	
	//var userRecord;	   	    
 	    var body = ''; // for large payloads - please use an array buffer (see note below)
	    req.on('data', function (data) 
	    {
	        body += data; 
	    });
	    req.on('end', function (){
	       	MongoClient.connect(url, function(err, db) {
			if (err) throw err;
			  var dbo = db.db("alkem");
			  //var myobj = { name: "Company Inc", address: "Highway 37" };
			  dbo.collection("remedy").insertOne(JSON.parse(body), function(err, result) {
			    if (err) throw err;
			    console.log("1 document inserted");
			    db.close();
			    res.send(JSON.parse(body));
			  });
			});
	    });  
	},
	getUserData : function(req, res){	
	//var userRecord;	   	    
 	    MongoClient.connect(url, function(err, db) {
			if (err) throw err;
			  var dbo = db.db("alkem");
			  dbo.collection("employee").find({}).toArray(function(err, result) {
			    if (err) throw err;
			    console.log(result);			    
			    db.close();
			    res.send(result);
			});
		});
	},
	insertUserData : function(req, res){			
	    var body = ''; // for large payloads - please use an array buffer (see note below)
	    req.on('data', function (data) 
	    {
	        body += data; 
	    });
	    req.on('end', function (){

	       	MongoClient.connect(url, function(err, db) {
			if (err) throw err;
			  var dbo = db.db("alkem");
			  //var myobj = { name: "Company Inc", address: "Highway 37" };
			  dbo.collection("employee").insertOne(JSON.parse(body), function(err, result) {
			    if (err) throw err;
			    console.log("1 document inserted");
			    db.close();
			    res.send(JSON.parse(body));
			  });
			});
	    });  
	},

	removeRecord : function(req, res){
		var remedyId;
		var body = ''; // for large payloads - please use an array buffer (see note below)
	    req.on('data', function (data) 
	    {
	        body += data; 
	    });
	    req.on('end', function (){
	    	//res.send(JSON.parse(body));
			MongoClient.connect(url, function(err, db) {
				if (err) throw err;
				var dbo = db.db("alkem");
				remedyId=JSON.parse(body);
				 var myquery = { email: remedyId };
				//var myquery = { email: /remedyId/ };
				dbo.collection("employee").deleteMany(myquery, function(err, obj) {
				    if (err) throw err;
				    res.send(obj + " document(s) deleted");
				    db.close();
				});
			});
		});
	}			
}

/* log.info({ req: req }, 'start request');  // <-- this is the guy we're testing
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World\n');
    log.info({ res: res }, 'done response'); */