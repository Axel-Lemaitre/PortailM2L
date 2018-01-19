var express = require('express');
var router = express.Router();

var prest_controller = require('../controllers/prest_controller');

router.get('/affranchissements', prest_controller.affr_create);
router.get('/reproductions', prest_controller.repr_create);
router.post('/affranchissements', prest_controller.affr_store);

module.exports = router;