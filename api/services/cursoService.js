const db = require('../../config/database');

/*db.curso.criar = function (req, res, next) {

    db.curso.create({
        nome: req.body.nome,
        responsavel: req.body.responsavel,
        telefone: req.body.telefone,
        celular: req.body.celular,
        email: req.body.email,
        endereco: req.body.endereco,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        logo: filesrc
    }).then(function(result){
        res.status(200).json(result);
    }, function (error) {
        console.log(error);
        res.status(500).json(error);
    })
}*/

db.curso.obterTodos = function(req, res, next){
    db.curso.findAll({
        
    }).then(function(result){
        res.status(200).json(result)
    },function(error){
        res.status(500).json(error);
    })
}

module.exports = db.curso;

