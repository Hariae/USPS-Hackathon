var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var request = require('request');
var axios = require('axios');

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });
  app.get('/', function(req,res) {
    res.send('Hello World');
});

request('http://production.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<TrackRequest USERID="392SANJO0150"><TrackID ID="EJ958088694US"></TrackID></TrackRequest>',
 { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
});

axios.get('http://production.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=<TrackRequest USERID="392SANJO0150"><TrackID ID="EJ958088694US"></TrackID></TrackRequest>')
.then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

app.listen(3001);
console.log("Server Listening on port 3001");