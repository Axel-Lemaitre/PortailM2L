var db = require('../databases/db.js');

exports.affr_create = function(req, res) {
    res.render('prestations/affranchissements')
};

exports.repr_create = function(req, res) {
    res.render('prestations/reproductions')
};


exports.affr_store = function(req, res) {

};