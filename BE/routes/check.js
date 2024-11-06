const express = require('express');
const router = express.Router();

router.get('/check', (req, res) =>{
    res.json({
        status: "200",
        data: "Hello World!",
        message: "Pesan berhasil diterima"
    });
});

module.exports = router;