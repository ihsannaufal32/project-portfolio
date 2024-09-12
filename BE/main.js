const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const host = '192.168.1.8'
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!"); 
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
