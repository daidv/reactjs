var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(1337,function(){
  console.log("connect to server success with port 1337 !!! ");
});

app.get("/",function(req, res){
  res.render("trangchu");
});
