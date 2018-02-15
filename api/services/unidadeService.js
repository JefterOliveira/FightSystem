const db = require('../../config/database');
const fs = require('fs')

db.unidade.criar = function (req, res, next) {

    let fileDirectory = 'public/uploads/logo' + req.body.nome + '.png';
    let filesrc = 'uploads/logo' + req.body.nome + '.png';
    salvarLogo(req.body.logo, fileDirectory)

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
        estado: req.body.estado,
        logo: filesrc
    }).then(function(result){
        res.status(200).json(result);
    }, function (error) {
        console.log(error);
        res.status(500).json(error);
    })
}

function salvarLogo(logoBase64, fileDirectory){

    let base64Data = logoBase64.replace(/^data:image\/png;base64,/,"");
    let binaryData = new Buffer(base64Data, 'base64').toString('binary');

    fs.writeFile(fileDirectory, binaryData, 'binary', function(err){
        if (err){
            console.log(err)
            throw err
        } 
        console.log('File saved.')
    })
}

db.unidade.atualizar = function(req, res, next){

    let fileDirectory = 'public/uploads/logo' + req.body.nome + '.png';
    let filesrc = 'uploads/logo' + req.body.nome + '.png';
    salvarLogo(req.body.logo, fileDirectory)

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
        logo: filesrc,
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
        res.status(500).json(error);
    })
}

db.unidade.obterTodos = function(req, res, next){
    db.unidade.findAll({
        include:[
            { 
              model: db.turma,
              include:[
                    {
                        model: db.aluno
                    }
                  
              ]
            }
        ]      
    }).then(function(result){
        res.status(200).json(result)
    },function(error){
        res.status(500).json(error);
    })
}

db.unidade.inativarUnidade = function(req, res, next){
    db.unidade.update(
        {
            ativo: false
        },
        {
            where:{
                id:{
                    $eq: req.params.id
                }
            }
        }    
    ).then(function(result){
        res.status(200).json(result)
    }, function(error){
        res.status(500).json(error);
    })    
}

module.exports = db.unidade;

