const {Pool} = require('pg');
const connectionString = `postgres://mywebappuser:12345@localhost/mywebapp`;
const pool = new Pool({connectionString: connectionString});

pool.query(
	`SELECT * FROM bowlers`,
	[],
	function (err, result) {
		if (err) {
			console.error(err);
		}
		console.log(result.rows);
		process.exit(0);
	}
);