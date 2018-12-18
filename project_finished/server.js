var express = require('express');
var session = require('express-session');
var PostgreSqlStore = require('connect-pg-simple')(session);
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));
var conString = "pg://" + 
	config.database.username + ":" + 
	config.database.password + "@" + 
	config.database.host + ":" + 
	config.database.port + "/cfs";
var sessionOptions = {
  	secret: "thisisasecretanditshouldntbeshared",
  	resave : true,
  	saveUninitialized : false,
  	store : new PostgreSqlStore({
    	conString: conString
  	})
};

app.use(session(sessionOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3000, function() {
    console.log("App Server via Express is running on port 3000");
    console.log("To end, press Ctrl + C");
});



