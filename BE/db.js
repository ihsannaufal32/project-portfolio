const {Client} = require('pg');

const client = new Client({
    user: 'fallmoonproject',
	host: '192.168.1.201',
    port: 5432,
	database: 'contohbe',
	password: '@Mian123',
});

client.connect();

client.query('SELECT * FROM contoh'), (err, res) => {
    if (!err){
        console.log(res.rows);
    } else {
        console.log(err.message)
    }
    client.end
}
// pool.on('connect', () => {
//   console.log('Connected to PostgreSQL');
// });

// module.exports = pool;