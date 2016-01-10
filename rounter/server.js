var express = require('express');
var app = express();
var path = require('path');
var _DIRNAME = "/var/nodejs/yanlong/js_game_development/";

// set default static resources
app.use(express.static(_DIRNAME + '/')); 

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(_DIRNAME + '/index.html'));
});
app.listen(5566);
