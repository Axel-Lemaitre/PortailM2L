var db = require('../databases/db.js');

exports.factu_index = function(req, res) {
    res.render('facturations/visualiser')
};

exports.factu_create = function(req, res) {
    res.render('facturations/etablir')
};

exports.factu_store = function(req, res) {
    var montant = req.body.montant;
    var description = req.body.description;
    var idligue = req.body.idligue;
    var etat = 0;

    var id = 1;

    const query =  {
        name: 'ajouter-ligue',
        text: 'INSERT INTO facture (id, idligue, montant, description, etat) VALUES ($1, $2, $3, $4, $5)',
        values: [id, idligue, montant, description, etat]
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