const express = require('express');
const router = express.Router();


router.get('/play', (req, res) => {
    res.send('you are playing')
});


module.exports = router;