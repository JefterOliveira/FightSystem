angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "homeCtrl"
    })
        
    .state('novaunidade', {
      url: "/novaunidade",
      templateUrl: "templates/novaUnidade.html",
      controller: "novaUnidadeCtrl"
    })

    $urlRouterProvider.otherwise('/home')
  }
])
