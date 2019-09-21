const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const {Pool} = require('pg');
const connectionString = `postgres://mywebappuser:12345@localhost/mywebapp`;
const pool = new Pool({connectionString: connectionString});

app.use(express.static(path.join(__dirname, 'public')));

function getBowlerData() {
	pool.query(
		`SELECT * FROM bowlers`,
		[],
		function (err, result) {
			if (err) {
				console.error(err);
			}
			console.log(result.rows);
			result.rows.forEach(function (bowler) {
				let overallAvg = (bowler.accuracy + bowler.power + bowler.consistency) / 3;
				let overallRating = Math.round(overallAvg);
				console.log(`Bowler Name: ${bowler.first_name} ${bowler.last_name}`);
				console.log(`Bowler Overall: ${overallRating}`);
			});
			// This is where you will add new code
		}
	);
} 

router.get('/', function (req, res) {
	getBowlerData();
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/', router);

let server = app.listen(3000, function() {
    console.log("App Server via Express is running on port 3000");
    console.log("To end, press Ctrl + C");
});
