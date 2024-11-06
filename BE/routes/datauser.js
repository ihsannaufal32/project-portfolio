const express = require('express');
const router = express.Router();
const db = require('./db')

router.get("/", async (req, res) => {
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

module.exports = router;