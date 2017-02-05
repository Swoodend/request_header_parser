'use strict';
const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});








app.listen(process.env.PORT || 1337, function(){
  let port = process.envPORT || 1337;
  console.log('app listening on port', port);
})