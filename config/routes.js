const express = require('express')

const unidadeService = require('../api/services/unidadeService')
const alunoService = require('../api/services/alunoService')
const cursoService = require('../api/services/cursoService')
const categoriaService = require('../api/services/categoriaService')
const turmaService = require('../api/services/turmaService')

module.exports = function(server){

  //API routes
  const router = express.Router();
  server.use('/api', router);

  //rotas da API

  router.route('/teste').get(function(req, res, next){
    res.status(200).json("Teste realizado com sucesso!");
  });

  // rotas de unidade
  router.route('/unidade').post(unidadeService.criar)
  router.route('/unidade').put(unidadeService.atualizar)
  router.route('/unidade').get(unidadeService.obterTodos)
  router.route('/unidade/:id').delete(unidadeService.inativarUnidade)
  router.route('/ativarunidade/:id').get(unidadeService.ativarUnidade)
  //rotas de turma
  router.route('/turma').post(turmaService.criar)
  router.route('/turma').get(turmaService.obterTodos)
  router.route('/turma').put(turmaService.atualizar)
  router.route('/turma/:id').delete(turmaService.inativarTurma)
  router.route('/ativarturma/:id').get(turmaService.ativarTurma)
  // rotas de aluno
  router.route('/aluno').post(alunoService.criar)
  router.route('/aluno').put(alunoService.atualizar)
  router.route('/aluno').get(alunoService.obterTodos)
  //rotas de curso
  router.route('/curso').get(cursoService.obterTodos)
  //rotas de categoria
  router.route('/categoria').get(categoriaService.obterTodos)

  router.get('/', function(req, res){
		res.status(200).render('index');
  })  
};
