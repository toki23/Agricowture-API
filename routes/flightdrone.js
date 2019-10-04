var express = require("express");
var jsonfile = require("jsonfile");
var fs = require("fs");
var router = express.Router();
var request = require('request');
var getjson = require("../public/javascripts/getjson");
var path   = "localhost:4000"
var Calendar = require('node-google-calendar');
var config = require('./credential/calendar-config');
var calId = config.calendarId.Agricowture;
var calendar = new Calendar(config);
var cowid;

router.get("/changePath/:path",(req,res,next)=>{
  path = req.params.path;
  console.log(path);
  res.send("changepath");
});

router.get("/:number", async function(req, res, next) {
  var date = Date();
  var jsonObj = await getjson("./views/ahooo.json");
  var options = {
      url: `http://${path}/flightdrone/${jsonObj[req.params.number-1].Lat}/${jsonObj[req.params.number-1].Lng}`,
      method: 'GET'
  };
  console.log(`http://${path}/flightdrone/${jsonObj[req.params.number-1].Lat}/${jsonObj[req.params.number-1].Lng}`);
    request(options, function (error, response, body) {
      var event = {
        'start' : {'dateTime': date.toISOString() },
        'end': {'dateTime': date.toISOString() },
        'summary': '牛'+ String(req.params.number) + '発情ボタン押下',
        'colorId': 11 
      };
      calendar.Events.insert(calId, event)
      .then(resp => {
        console.log(resp);
      }).catch(err => {
        console.log(err.message);
      });
        res.send(body);
      });
});

module.exports = router;
