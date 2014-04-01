var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var fs = require('fs');

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', function(req, res){
	setTimeout(function(){
		var img = fs.readFileSync(path.join(__dirname, 'logo.gif'));
	    res.writeHead(200, {'Content-Type': 'image/gif' });
	    res.end(img, 'binary');		
	}, 4000);
})

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
