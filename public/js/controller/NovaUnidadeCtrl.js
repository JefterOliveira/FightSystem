angular.module('app').controller('novaUnidadeCtrl',['$scope', '$state', 'apiService', 'apiConstantes',  novaUnidadeCtrl])

function novaUnidadeCtrl($scope, $state, apiService, apiConstantes){
    
    $scope.unidade = {};
    
    $scope.limparForm = function(){
        $scope.unidade = {};
    }
    
    $scope.fecharModal = function(){
        $("#modal").modal('hide');
    }
    
    $scope.irListaUnidades = function(){
        //$state.go('listaunidade');
    }
  
    $scope.cadastrarUnidade = function(unidade){
        var pattern = /[\D]+/g;
        console.log(unidade)
        unidade.telefone = unidade.telefone.replace(/[\D]+/g, '');
        console.log(unidade)
        /*apiService.post(apiConstantes.baseUrlAPI + apiConstantes.unidade, unidade).then(function(result){
            $scope.limparForm();
            $("#modal").modal('show');
        }, function(error){
            console.log(error)
        })*/
    }
}
