var express = require('express');
var router = express.Router();

var factu_controller = require('../controllers/factu_controller');

router.get('/visualiser', factu_controller.factu_index);
router.get('/etablir', factu_controller.factu_create);

module.exports = router;