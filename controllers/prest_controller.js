var db = require('../databases/db.js');

exports.affr_create = function(req, res) {
    const query =  {
        name: 'afficher-ligues',
        text: 'select id, nom from ligue',
    };
    const query2 =  {
        name: 'afficher-typeAffr',
        text: 'select * from "typeAffr"',
    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            db.get().query(query2, function(err, result2){
                if (err) {
                    console.log(err.stack);
                    res.send('ERROR');
                } else {
                    res.render('prestations/affranchissements', {listLigue : result.rows, typeAffr : result2.rows});
                }
            });
        }
    });
};

exports.repr_create = function(req, res) {
    res.render('prestations/reproductions')
};


exports.affr_store = function(req, res) {

};