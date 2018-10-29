const express = require('express')
const app = express()
const port = 80
var getJSON = require('get-json')

app.set('json spaces', 4);

var upstream_uri = 'http://time.jsontest.com/';
var service_name = 'testapp-v1';

app.get('/', (req, res) => {

  getJSON(upstream_uri, function(error, response){
      res.send(response);
  })

});

app.listen(port)