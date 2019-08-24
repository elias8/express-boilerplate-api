'use strict';

const express = require('express');
const router = express.Router();

router.use('/', (req, res) => {
	res.send('Hello');
});

module.exports = router;