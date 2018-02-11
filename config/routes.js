const express = require('express');

const unidadeService = require('../api/services/unidadeService');

module.exports = function(server){

  //API routes
  const router = express.Router();
  server.use('/api', router);

  //rotas da API

  router.route('/teste').get(function(req, res, next){
    res.status(200).json("Teste realizado com sucesso!");
  });

  // rotas de unidade
  router.route('unidade').post(unidadeService.criar)
  router.route('unidade').put(unidadeService.atualizar)

  //rota inicial
  router.get('/', function(req, res){
		res.status(200).render('index');
  })  
};
