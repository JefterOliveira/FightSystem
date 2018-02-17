angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "homeCtrl"
    })
        
    .state('novaunidade', {
      url: "/novaunidade",
      params: {
        unidade: null 
      },    
      templateUrl: "templates/novaUnidade.html",
      controller: "novaUnidadeCtrl"
    })

    .state('gestaounidades', {
      url: "/gestaounidades",
      templateUrl: "templates/gestaoUnidades.html",
      controller: "gestaoUnidadesCtrl"
    })

    .state('novaturma', {
      url: "/novaturma",
      params: {
        turma: null 
      },    
      templateUrl: "templates/novaTurma.html",
      controller: "novaTurmaCtrl"
    })

    .state('gestaoturmas', {
      url: "/gestaoturmas",   
      templateUrl: "templates/gestaoTurmas.html",
      controller: "gestaoTurmasCtrl"
    })

    $urlRouterProvider.otherwise('/home')
  }
])
