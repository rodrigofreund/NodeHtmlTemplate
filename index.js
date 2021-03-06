var express = require('express')

var engines = require('consolidate');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views/pages/'));

app.set('views', __dirname + '/views/pages/');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});