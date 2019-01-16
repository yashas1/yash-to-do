var express = require('express');

var auto =express();
var port =process.env.PORT || 3000;
var bodyparser =require('body-parser'); 
var todo=[];
var todoid=1;


auto.use(bodyparser.json());
    
auto.post('/todos',function(req,res){
    var body = req.body;
    body.id=todoid++;
    body.yet="open";
    todo.push(body);
   console.log(body);
    res.json(body);
})

auto.get('/todos/:id',function(req,res){
    var todoid = parseInt(req.params.id,10);
    var mathcedid;
    
    todo.forEach(function(todos){
        
        if(todoid==todos.id)
{
    mathcedid=todos; 
    
}
        
    })
   res.json(mathcedid);
    
})

auto.get('/todos',function(req,res){
    
    res.json(todo);
    
})

auto.get('/',function(req,res){
    
    res.send("yashs");
    
} );

auto.listen(port, function(){
    console.log("express server started on port"+ port);
    
});