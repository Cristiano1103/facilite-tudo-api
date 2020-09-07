const foto = require('./fotos');
const router = require('express').Router();

router.use('/fotos', foto);

module.exports = router;