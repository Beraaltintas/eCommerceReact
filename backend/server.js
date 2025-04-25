const express = require("express");
const app = express();

app.get("/", (req, res)=>{
res.send("hello");
});

app.get("/api", (req, res)=>{
    res.send("apirouddte");
})

app.listen(5000, ()=>{
    console.log(`sunucu ${5000} portunda`);
    
})