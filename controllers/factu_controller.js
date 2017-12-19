var db = require('../databases/db.js');

exports.factu_index = function(req, res) {
    res.render('facturations/visualiser')
};

exports.factu_create = function(req, res) {
    res.render('facturations/etablir')
};