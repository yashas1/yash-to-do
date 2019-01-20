var express = require('express');

var auto =express();
var port =process.env.PORT || 3000;
var bodyparser =require('body-parser'); 
var todo=[];
var todoid=1;
var _ = require('underscore');

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
    var todoid = parseInt(req.params.id);
    var mathcedid =_.findWhere(todo,{id:todoid});
    

   res.json(mathcedid);
    
//       var todoid = parseInt(req.params.id,10);
//    var mathcedid =_.findWhere(todo,{id:todoid});
//    todo =_.without(todo,mathcedid);
//console.log(todo);
//   res.json(mathcedid);
//    
    
})


auto.delete('/todos/:id',function(req,res){
    var todoid = parseInt(req.params.id,10);
    var mathcedid =_.findWhere(todo,{id:todoid});
    todo =_.without(todo,mathcedid);
console.log(todo);
   res.json(mathcedid);
    
})


auto.put('/todos/:id',function(req,res){
     var body = req.body;
    var todoid = parseInt(req.params.id,10);
    var mathcedid =_.findWhere(todo,{id:todoid});
    var changed ={};
  
    if(body.hasOwnProperty("disription")){
    changed.discription=body.discription;
   
       }
    if(body.hasOwnProperty("completed")){
        
        changed.completed=body.completed; 
        
    }
    
     console.log(changed);
    _.extend(mathcedid,changed);



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