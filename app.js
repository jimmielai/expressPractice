var express = require('express');

var app = express();        //parent app
var admin = express();      //admin router

app.get('/', function(req, res){
    res.send('Home Page');
});

admin.on('mount', function(parent){
    console.log('Admin Mounted');
    console.log(parent);
})

admin.get('/', function(req, res){
    res.send('Admin Homepage');
});

app.use(['/adm*n', '/manager'], admin);
var x = 0;
app.listen(3000);