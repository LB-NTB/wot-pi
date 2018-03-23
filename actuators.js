var express = require('express'),
  router = express.Router(),
  resources = require('./model');




// **********************************
// Alle Sensoren
// **********************************
router.route('/').get(function (req, res, next) {
  //req.result = resources.pi.actuators;
  //next();
  res.send(resources.pi.actuators);  // funktoniert
});


// **********************************
// LED
// **********************************
router.route('/leds').get(function (req, res, next) {
  //req.result = resources.pi.actuators.leds;
  //next();
  res.send(resources.pi.actuators.leds); // funktioniert
});

router.route('/leds/:id').get(function (req, res, next) {
  //req.result = resources.pi.actuators.leds[req.params.id];
  //next();
  res.send(resources.pi.actuators.leds[req.params.id]); // funktioniert

});


router.route('/leds/:id').put(function(req, res, next) {
  var selectedLed = resources.pi.actuators.leds[req.params.id];
  var oldValue = selectedLed.value;
  console.log("LED: "+ selectedLed.value+";  alter Wert: "+oldValue); //
  // Neuer Wert in JSON schreiben......
  //resources.pi.actuators.leds[selectedLed].value = (oldValue+1)%2;
  console.log(selectedLed);


  res.send(selectedLed);
  //req.result = selectedLed;
  //next();
});






// **********************************
// Relais
// **********************************
router.route('/relays').get(function (req, res, next) {
  req.result = resources.pi.actuators.relays;
  next();
});

router.route('/relays/:id').get(function (req, res, next) {
  req.result = resources.pi.actuators.relays[req.params.id];
  next();
}).put(function(req, res, next) { // heisst das die gleiche Router aber mit PUT?
  var selectedRelay = resources.pi.actuators.relays[req.params.id];
  selectedRelay.value = req.body.value;
  req.result = selectedRelay;
  next();
});


module.exports = router;
