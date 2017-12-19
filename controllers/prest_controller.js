var db = require('../databases/db.js');

exports.affr_create = function(req, res) {
    res.render('prestations/affranchissements')
};

exports.repr_create = function(req, res) {
    res.render('prestations/reproductions')
};

/*
exports.prest_store = function(req, res) {

    const query =  {
        // give the query a unique name
        name: 'fetch-all-book',
        text: 'SELECT * FROM livre',
    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('livre/index', { listeBooks : result });
        }
    });

};

    */