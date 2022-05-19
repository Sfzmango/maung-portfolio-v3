const router = require('express').Router();

const userRoutes = require('./repos.js');

router.use('/repos', userRoutes);

module.exports = router;