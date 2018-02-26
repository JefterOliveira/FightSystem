const db = require('../../config/database');

db.aluno.criar = function (req, res, next) {
    db.aluno.create({
        arteMaisTreinada: req.body.arteMaisTreinada,
        tempoArteMaisTreinada: req.body.tempoArteMaisTreinada,
        graduacao: req.body.graduacao,
        deuAula: req.body.deuAula,
        equivalencia: req.body.equivalencia,
        comoConheceu: req.body.comoConheceu,
        nome: req.body.nome,
        categoria: req.body.categoria,
        nomePai: req.body.nomePai,
        nomeMae: req.body.nomeMae,
        dataNascimento: req.body.dataNascimento,
        sexo: req.body.sexo,
        identidade: req.body.identidade,
        orgao: req.body.orgao,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        telefoneResidencial: req.body.telefoneResidencial,
        celular: req.body.celular,
        telefoneRecorrente: req.body.telefoneRecorrente,
        telefoneComplementar: req.body.telefoneComplementar,
        email: req.body.email,
        peso: req.body.peso,
        altura: req.body.altura,
        tipoSanguineo: req.body.tipoSanguineo,
        paMedia: req.body.paMedia,
        medicamentosUtilizados: req.body.medicamentosUtilizados,
        fraturas: req.body.fraturas,
        planoSaude: req.body.planoSaude,
        nomeContatoEmergencia: req.body.nomeContatoEmergencia,
        telefoneContatoEmergencia1: req.body.telefoneContatoEmergencia1,
        telefoneContatoEmergencia2: req.body.telefoneContatoEmergencia2,
        desconto: req.body.desconto,
        ativo: req.body.ativo,
        situacao: req.body.situacao
    }).then(function(result){
        console.log(result)
    }, function (error) {
        console.log(error);
        res.status(500).json(error);
    })
}

db.aluno.atualizar = function(req, res, next){
    db.aluno.update({
        arteMaisTreinada: req.body.arteMaisTreinada,
        tempoArteMaisTreinada: req.body.tempoArteMaisTreinada,
        graduacao: req.body.graduacao,
        deuAula: req.body.deuAula,
        equivalencia: req.body.equivalencia,
        comoConheceu: req.body.comoConheceu,
        nome: req.body.nome,
        categoria: req.body.categoria,
        nomePai: req.body.nomePai,
        nomeMae: req.body.nomeMae,
        dataNascimento: req.body.dataNascimento,
        sexo: req.body.sexo,
        identidade: req.body.identidade,
        orgao: req.body.orgao,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cep: req.body.cep,
        cidade: req.body.cidade,
        estado: req.body.estado,
        telefoneResidencial: req.body.telefoneResidencial,
        celular: req.body.celular,
        telefoneRecorrente: req.body.telefoneRecorrente,
        telefoneComplementar: req.body.telefoneComplementar,
        email: req.body.email,
        peso: req.body.peso,
        altura: req.body.altura,
        tipoSanguineo: req.body.tipoSanguineo,
        paMedia: req.body.paMedia,
        medicamentosUtilizados: req.body.medicamentosUtilizados,
        fraturas: req.body.fraturas,
        planoSaude: req.body.planoSaude,
        nomeContatoEmergencia: req.body.nomeContatoEmergencia,
        telefoneContatoEmergencia1: req.body.telefoneContatoEmergencia1,
        telefoneContatoEmergencia2: req.body.telefoneContatoEmergencia2,
        desconto: req.body.desconto,
        ativo: req.body.ativo,
        situacao: req.body.situacao
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

db.aluno.obterTodos = function(req, res, next){
    db.aluno.findAll({
        
    }).then(function(result){
        res.status(200).json(result)
    },function(error){
        console.log(error);
    })
}

module.exports = db.aluno;

