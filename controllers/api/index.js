const router = require('express').Router();

const userRoutes = require('./userroutes');

router.use('/repos', userRoutes);

module.exports = router;