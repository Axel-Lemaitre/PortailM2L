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
    var ligue = req.body.idligue;
    var datePres = req.body.datePres;
    var typeAffr = req.body.idTypeAffr;
    var quantite = req.body.qteAffr;
    var idPres = 0;

    const query2 =  {
        name: 'afficher-idPres',
        text: 'select max(id) as max from "prestation"',
    };

    const query3 =  {
        name: 'ajouter-prest',
        text: 'INSERT INTO prestation (idLigue, datePres) VALUES ($1, $2)',
        values: [ligue, datePres]
    };

    db.get().query(query3, function(err, result3) {
        if (err) {
            console.log(err.stack);
            res.send('ERROR INSERT PRESTA');
        } else {
            db.get().query(query2, function (err, result2) {
                if (err) {
                    console.log(err.stack);
                    res.send('ERROR MAX PRESTA');
                } else {
                    idPres = result2.rows[0].max;

                    const query = {
                        name: 'ajouter-affr',
                        text: 'INSERT INTO affranchissement (quantite, typeaffr, idprestation) VALUES ($1, $2, $3)',
                        values: [quantite, typeAffr, idPres]
                    };

                    db.get().query(query, function (err, result) {
                        if (err) {
                            console.log(err.stack);
                            res.send('ERROR INSERT AFFR');
                        } else {
                            res.redirect('../../');
                        }
                    });
                }
            });
        }
    });

};