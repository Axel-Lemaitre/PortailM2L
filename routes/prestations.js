var express = require('express');
var router = express.Router();

/* GET prestation page. */
router.get('/prestation',
    function(req, res) {
        console.log(req.session);

        res.render('index', { title: 'Portail de la M2L', user: req.user });
    }
);

module.exports = router;