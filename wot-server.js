var express = require('express'),
  actuatorsRoutes = require('./actuators'),
  resources = require('.//model'),
  cors = require('cors'), // ermöglicht PUT und JSON-Abfragen S.158
  bodyParser = require('body-parser'),
  ledsPlugin = require('./ledsPlugin');

var app = express();


app.use(bodyParser.json());
app.use(cors());



// Routen
app.use('/pi/actuators', actuatorsRoutes);
app.get('/pi', function (req, res) {
  res.send('Gugus')
});



ledsPlugin.start({'simulate': false, 'frequency': 10000});



app.listen(3000, function(){
  console.log("Server läuft auf port 3000");
});








