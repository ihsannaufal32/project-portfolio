const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const host = '192.168.1.26'
const db = require('./db')
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
	try {
		const client = await db.pool.connect();
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
