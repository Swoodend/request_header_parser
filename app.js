'use strict';
const express = require('express');
const app = express();
const os = require('os');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/whoami', function(req, res){
  let computer = os.platform();
  
  if (computer === 'darwin'){
    computer = 'Macintosh';
  } else if (computer === 'win32'){
    computer = 'Windows';
  }

  let version = os.release();
  let ip = req.connection.remoteAddress;
  let lang = req.header('Accept-Language');

  res.send({
    ipaddress: ip,
    language: lang.slice(0,5),
    software: computer + ' ' + version
  });
});





app.listen(process.env.PORT || 1337, function(){
  let port = process.envPORT || 1337;
  console.log('app listening on port', port);
});