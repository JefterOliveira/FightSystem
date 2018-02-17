const db = require('../../config/database');

db.turma.criar = function (req, res, next) {
    
    db.turma.create({
        professor: req.body.professor,
        turno: req.body.turno,
        horaInicio: req.body.horaInicio,
        horaFim: req.body.horaFim,
        unidadeReferencia: req.body.unidade,
        cursoReferencia: req.body.curso,
        mensalidade: req.body.mensalidade,
        rateio: req.body.rateio,   
        diaAulaTurmas: req.body.diaAulaTurma
    },
    {
        include: [ db.diaAulaTurma ]
    }
    ).then(function(turma){
        /*db.diaAulaTurma.create({
            diaSemana: 3, 
            turmaReferencia: turma.id
        }).then(function(diasAulas){
            res.status(200).json(turma);
        }, function(error){
            console.log(error)
            res.status(500).json(error);
        })*/
        res.status(200).json(turma);
    }, function (error) {
        console.log(error);
        res.status(500).json(error);
    })
}

db.turma.obterTodos = function(req, res, next){
    db.turma.findAll({
        include:[
           {model: db.curso},
           {model: db.diaAulaTurma},
           {model: db.aluno}
        ]
    }).then(function(result){
        res.status(200).json(result)
    },function(error){
        res.status(500).json(error);
    })
}

module.exports = db.turma;

