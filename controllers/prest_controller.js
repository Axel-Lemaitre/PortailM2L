var db = require('../databases/db.js');

exports.pres_create = function(req, res) {
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
                    res.render('prestations/prestations', {listLigue : result.rows, typeAffr : result2.rows});
                }
            });
        }
    });
};

exports.pres_store = function(req, res) {
    var ligue = req.body.idLigue;
    var typeAffr = req.body.idTypeAffr;
    var quantite = req.body.qteAffr;
    var idPrest = '1';

    const query =  {
        name: 'ajouter-prest',
        text: 'INSERT INTO affranchissement (quantite, typeaffr, idprestation) VALUES ($1, $2, $3)',
        values: [quantite, typeAffr, idPrest]
    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.redirect('../../');
        }
    });

};