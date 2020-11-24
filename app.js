const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');

var randomName = faker.name.findName(); 
var randomEmail = faker.internet.email();
const company = faker.company.companyName();
const city = faker.address.city();
const country = faker.address.country();
const date = faker.date.recent();

app.get("/", function (req, res) {

res.render("index.ejs", {"name": randomName, "email": randomEmail, "company":company, "city":city,
	"country":country
});
}); //r


app.get("/history", function(req, res)
{
   res.render("history.ejs"); 
});

app.get("/tutorial", function(req, res)
{
    res.render("tutorial.ejs");
});

app.get("/usage", function(req, res)
{
    res.render("usage.ejs");
});

app.get("/contact", function (req, res) {

res.render("contact.ejs", {"name": randomName, "email": randomEmail, "company":company, "city":city,
	"country":country
});
}); 

app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("Express server is running");
});