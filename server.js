var express = require('Express');
var app = express();

//Setup the public folder
app.use(express.static('public'));

var routes = require('./controllers/routes.js');

//both index.js and things.js should be in same directory
app.use('/routes', routes);

app.listen(3000);