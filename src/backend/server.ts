/// <reference path="../../typings/tsd.d.ts" />
import Express from 'express';

var app : express.Express = express();

app.use('/', express.static(__dirname + '/../frontend'));

app.get('/api/user', (req, res) => {
	res.send({
		"isApiWorking": true
	});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});