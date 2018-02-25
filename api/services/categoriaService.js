const db = require('../../config/database');

db.categoria.obterTodos = function(req, res, next){
    db.categoria.findAll({

    }).then(function(result){
        res.status(200).json(result)
    },function(error){
        res.status(500).json(error);
    })
}

module.exports = db.categoria;