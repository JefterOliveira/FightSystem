const db = require('../../config/database');

db.turma.criar = function (req, res, next) {

    db.turma.create({
            professor: req.body.nome,
            turno: req.body.responsavel,
            mensalidade: req.body.telefone,
            rateio: req.body.celular,
            diaAulaTurma: req.body.diaAulaTurma
        },
        {
            include: [db.diaAulaTurma]
        }
    ).then(function(result){
        res.status(200).json(result);
    }, function (error) {
        console.log(error);
        res.status(500).json(error);
    })
}

/*db.turma.obterTodos = function(req, res, next){
    db.curso.findAll({
        
    }).then(function(result){
        res.status(200).json(result)
    },function(error){
        res.status(500).json(error);
    })
}*/

module.exports = db.turma;

