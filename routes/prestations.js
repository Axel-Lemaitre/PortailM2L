var express = require('express');
var router = express.Router();

var prest_controller = require('../controllers/prest_controller');

router.get('/creer', prest_controller.pres_create);
router.post('/creer', prest_controller.pres_store);

module.exports = router;