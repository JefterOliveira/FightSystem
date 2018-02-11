const db = require('../../config/database');

db.unidade.criar = function (req, res, next) {
    db.unidade.create({
        nome: req.body.nome,
        responsavel: req.body.responsavel,
        telefone: req.body.telefone,
        celular: req.body.celular,
        email: req.body.email,
        endereco: req.body.endereco,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado
    }).then(function(result){
        console.log(result)
    }, function (error) {
        console.log(error);
        res.status(500).json(error);
    })
}

db.unidade.atualizar = function(req, res, next){
    db.unidade.update({
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
        ativo: req.body.ativo
    }, {
        where: {
            id: {
                $eq: req.body.id
            }
        }
    }
    ).then(function(result){
        res.status(200).json(result);
    }, function(error){
        console.log(error);
        res.status(500).json(error.errors[0].message);
    })
}

module.exports = db.unidade;

