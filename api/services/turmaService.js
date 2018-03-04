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
        include: [db.diaAulaTurma]
    }
    ).then(function(turma){
        if(req.body.alunos){
            Promise.all(req.body.alunos.map(obj => {
                db.aluno.update({
                    turmaReferencia: turma.id
                    },
                    {
                        where: {
                            id: {
                                $eq: obj.id
                            }
                        }
                    }
                ) 
            }))           
            .then(function(result){
                console.log(result)
                res.status(200).json("Turma criada com sucesso!");
            }, function(error){
                console.log(error)
                res.status(500).json(error);
            })
        }else{
            res.status(200).json("Turma criada com sucesso!");
        } 
    }, function (error) {
        console.log(error);
        res.status(500).json(error);
    })
}

db.turma.atualizar = function(req, res, next){
    db.diaAulaTurma.destroy({
        where:{
            turmaReferencia: req.body.id
        }
    }).then(function(result){
        Promise.all(req.body.diaAulaTurma.map(obj => db.diaAulaTurma.create({diaSemana: obj.diaSemana, turmaReferencia: req.body.id})))
            .then(function(response){
                db.turma.update({
                    professor: req.body.professor,
                    turno: req.body.turno,
                    horaInicio: req.body.horaInicio,
                    horaFim: req.body.horaFim,
                    unidadeReferencia: req.body.unidade.id,
                    cursoReferencia: req.body.curso.id,
                    mensalidade: req.body.mensalidade,
                    rateio: req.body.rateio,  
                    diaAulaTurmas: req.body.diaAulaTurma
                    },
                    {
                        where: {
                            id: {
                                $eq: req.body.id
                            }
                        }
                    }    
                ).then(function(turma){
                    db.aluno.update({
                        turmaReferencia: null
                    },
                    {
                        where:{
                            turmaReferencia: {
                                $eq: req.body.id
                            }
                        }
                    }).then(function(result){
                        if(req.body.alunos){
                            Promise.all(req.body.alunos.map(obj => {
                                db.aluno.update({
                                    turmaReferencia: req.body.id
                                    },
                                    {
                                        where: {
                                            id: {
                                                $eq: obj.id
                                            }
                                        }
                                    }
                                ) 
                            }))           
                            .then(function(result){
                                console.log(result)
                                res.status(200).json("Turma alterada com sucesso!");
                            }, function(error){
                                console.log(error)
                                res.status(500).json(error);
                            })
                        }else{
                            res.status(200).json("Turma criada com sucesso!");
                        }     
                    }, function(error){
                        console.log(error)
                    })
                }, function(error){
                    console.log(error)
                    res.status(500).json(error);
                })
            }, function(error){
                console.log(error)
                res.status(500).json(error);
            })
        
    }, function(error){
        console.log(error)
        res.status(500).json(error);
    })
}

db.turma.obterTodos = function(req, res, next){
    db.turma.findAll({
        include:[
           {model: db.curso},
           {model: db.diaAulaTurma},
           {model: db.aluno},
           {model: db.unidade}
        ]
    }).then(function(result){
        res.status(200).json(result)
    },function(error){
        res.status(500).json(error);
    })
}

db.turma.inativarTurma = function(req, res, next){
    db.turma.update(
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

db.turma.ativarTurma = function(req, res, next){
    db.turma.update(
        {
            ativo: true
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
module.exports = db.turma;

