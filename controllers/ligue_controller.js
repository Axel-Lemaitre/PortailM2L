var db = require('../databases/db.js');

exports.ligue_list = function(req, res) {
    const query =  {
        name: 'afficher-ligues',
        text: 'select * from ligue',
    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('ligues/visualiser', {listLigue : result.rows});
        }
    });

};

exports.ligue_create = function(req, res) {
    res.render('ligues/ajouter')
};


exports.ligue_store = function(req, res) {
    var nom = req.body.nom;
    var adresse = req.body.adresse;
    var ville = req.body.ville;
    var cp = req.body.cp;
    var courriel = req.body.courriel;
    var telephone = req.body.telephone;

    const query =  {
        name: 'ajouter-ligue',
        text: 'INSERT INTO ligue (nom, cp, ville, courriel, téléphone, adresse) VALUES ($1, $2, $3, $4, $5, $6)',
        values: [nom, cp, ville, courriel, telephone, adresse]
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