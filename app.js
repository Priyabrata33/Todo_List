const express  = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
let items =[];
let workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



//we write these for sending value from js to html by ejs
app.get("/",function(req,res){
        let day = date.getDate();
        res.render("list",{ listTitle: day,newItemsList: items});

});



//we write these to get the value from html to nodeJS file by body parser
app.post("/",function(req,res){
   let item = req.body.newItem;

   if(req.body.list==="Work"){

        workItems.push(item);
        res.redirect("/work")  

        }else{
                items.push(item);
                res.redirect("/");
}
    
  
});

app.get("/work",function(req,res){
        res.render("list",{ listTitle:"Work List",newItemsList: workItems});
});

// app.post("/work",function(req,res){
//         let item = req.body.newItem;
        
//         workItems.push(item);
//         res.render("/work");
// });


app.listen(process.env.PORT || 4500,function(){
    console.log("Welcome to the server");
})







/*

var curday = date.getDay();
var day ="";

switch(curday){
    case 0: day = 'SunDay';
            break;
    case 1: day = 'MonDay';
            break;
    case 2: day = 'TuesDay';
            break;
    case 3: day = 'WednesDay';
            break;
    case 4: day  = 'ThursDay';
            break;
    case 5: day = 'FriDay';
            break;
    case 6: day = 'SaturDay';
            break;
    default:
        console.log("Error");
}

*/
