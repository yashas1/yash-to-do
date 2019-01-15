var express = require('express');

var auto =express();
var port =process.env.PORT || 3000;


auto.get('/',function(req,res){
    
    res.send("yashs");
    
} );

auto.listen(port, function(){
    console.log("express server started on port"+ port);
    
});