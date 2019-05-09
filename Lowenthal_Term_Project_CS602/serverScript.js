const express = require('express');//HTTP req/res middleware
const bodyParser = require('body-parser');//for POST requests
const handlebars = require('express-handlebars');//Templating engine

const app = express();//storing Express object

//static files
app.use(express.static(__dirname + '/public'));

// setup handlebars view engine
app.engine('handlebars', 
    handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));/*The request object body's 
values (within the key-value pairs), only type string or array accepted*/

//imports sub-routes
const routes = require('./routes/index.js');
app.use("/", routes);//top-level route

app.use((req, res) => {//if req does not match any routes, catch-all
    res.status(404);
    res.render("404");
});

app.listen(3000, () => {
    console.log("http://localhost:3000");
});

/*
//local path to mongod: "C:\Program Files\MongoDB\Server\4.0\bin"

//customer XML and JSON Requests

//test search_by_name for json
curl.exe -H "Accept:application/json" "http://localhost:3000/customer/search_by_name/" --request POST --data "search_by_name=drum%20set&submit=search"

//test search_by_description for json
curl.exe -H "Accept:application/json" "http://localhost:3000/customer/search_by_description/" --request POST --data "search_by_description=guitar&submit=search"

//test search_by_name for xml
curl.exe -H "Accept:application/xml" "http://localhost:3000/customer/search_by_name/" --request POST --data "search_by_name=drum%20set&submit=search"

//test search_by_description for xml
curl.exe -H "Accept:application/xml" "http://localhost:3000/customer/search_by_description/" --request POST --data "search_by_description=guitar&submit=search"

//for admin XML and JSON requests, change "customer" to "admin" in the url path

//example post request: "birthyear=1905&press=%20OK%20"
*/