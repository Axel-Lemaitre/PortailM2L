var express = require('express');
var router = express.Router();

var ligue_controller = require('../controllers/ligue_controller');

router.get('/visualiser', ligue_controller.ligue_list);
router.get('/ajouter', ligue_controller.ligue_create);
router.post('/ajouter', ligue_controller.ligue_store);

module.exports = router;