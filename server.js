var express = require('express');

var auto =express();
var port =process.env.PORT || 3000;

var todo=[{id:1,description:"meet the ppl",completed:false},{
    
    id:2,description:"take the bath",completed:false},{id:3,description:"meet the friendsl",completed:true}
   
]

auto.get('/todos/:id',function(req,res){
    var todoid = parseInt(req.params.id);
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