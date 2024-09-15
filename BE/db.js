const {Client} = require('pg');
const { Pool } = require('pg');

const pool = new Pool({
	user: 'fallmoonproject',
	host: '192.168.1.201',
	database: 'contohbe',
	password: '@Mian123',
	port: 5432,
});

pool.connect((err) => {
	if (err) throw err;
	console.log("DBconnect");
});