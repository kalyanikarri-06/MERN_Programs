const express = require("express");
const app=express();
app.use(express.json());//middleware to read JSON
let users=[
    {id:1,name:"Ravi"},
    {id:2,name:"Sita"}
];
//get-retrieve data
app.get("/users",(req,res)=>{
    res.json(users);
});
//post-accept data
app.post("/users",(req,res)=>{
    users.push(req.body);
    res.send("user added successfully");
});
//delete-delete resource
app.delete("/users/:id",(req,res)=>{
    users=users.filter(user=>user.id!=req.params.id);
    res.send("user deleted successfully");
});
app.listen(4000,()=>{
    console.log("server running on port 4000");
});