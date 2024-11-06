const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const host = '192.168.1.26'
const routes = require('./routes/routes')
app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(port, host, () => {
	console.log(`Server is running on port ${host}:${port}`)
})
