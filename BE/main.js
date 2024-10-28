const express = require("express");
const cors = require("cors");
const { Pool } = require('pg');
const app = express();
const port = 8080;
const host = '192.168.1.26'
const pool = new Pool({
	user: 'fallmoonproject',
	host: '192.168.1.201',
	database: 'contohbe',
	password: '@Mian123',
	port: 5432,
});

app.use(express.json());
app.use(cors());

pool.connect((err) => {
	if (err) throw err;
	console.log("DBconnect");
});

app.get("/", async (req, res) => {
	try {
		const client = await pool.connect();
		const username = await client.query('SELECT * FROM contoh')
		const user = username.rows;
		client.release();

		res.json({
			status: "200",
			data: user});
	} catch (err) {
		console.error(err);
		res.status(500).send('Error Retrieving Data');
	}
	
});

app.get("/data", (req, res) => {
	res.json({
		status: "200",
		data: "hello world :D"
	});
})

app.listen(port, host, () => {
	console.log(`Server is running on port ${host}:${port}`)
})
