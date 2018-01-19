var db = require('../databases/db.js');

exports.affr_create = function(req, res) {
    res.render('prestations/affranchissements')
};

exports.repr_create = function(req, res) {
    res.render('prestations/reproductions')
};


exports.affr_store = function(req, res) {
    var nom = req.body.nom
    var adresse = req.body.adresse;
    var ville = req.body.ville;
    var CP = req.body.CP;
    var courriel = req.body.courriel;

/*    const query =  {
        // give the query a unique name
        name: 'enregistrer-affranchissements',
        text: 'INSERT INTO ligue (id, nom, CP, ville, courriel, rue) VALUES (" + nom + ", " + 2 + ", " + ville + ", " + courriel + ", " + adresse + ") ON CONFLICT (courriel) DO NOTHING;'
    };

    db.get().query(query, function(err, result){
        if (err) {
            console.log(err.stack);
            res.send('ERROR');
        } else {
            res.render('/');
        }
    });
*/
};
