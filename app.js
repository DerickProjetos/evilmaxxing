const express = require('express')

let number = 1
const app = express()
app.set("view engine", "ejs")

app.get("/", function(req, res){
    res.render("1") 
})
app.get("/2", function(req, res){
   res.render("2")
})
app.get("/3", function(req, res){
    res.render("3")
})
app.get("/4", function(req, res){
    res.render('4')
})
app.get("/5", function(req, res){
    res.render("5")
})
app.get("/6", function(req, res){
    res.render("6")
})
app.get("/7", function(req, res){
    res.render("7")
})
app.get("/8", function(req, res){
    res.render("8")
})
app.get("/9", function(req, res){
    res.render("9")
})
app.get("/10", function(req, res){

    res.render("10", {"tempo": number})

})
app.listen(8080)