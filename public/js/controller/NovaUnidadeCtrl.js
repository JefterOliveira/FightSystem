angular.module('app').controller('novaUnidadeCtrl',['$scope', '$state', 'apiService', 'apiConstantes', novaUnidadeCtrl])

function novaUnidadeCtrl($scope, $state, apiService, apiConstantes){
    
    if($state.params.unidade)
        $scope.unidade = $state.params.unidade
    else
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

    $scope.readURL = function(){
        if ($('#inputlogo') && $('#inputlogo')[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah')
                    .attr('src', e.target.result)
                    .width(150)
                    .height(200);
            };

            reader.readAsDataURL($('#inputlogo')[0]);
        }
    }
  
    $scope.cadastrarUnidade = function(unidade){
        unidade.telefone = unidade.telefone.replace(/[\D]+/g, '');
        apiService.post(apiConstantes.baseUrlAPI + apiConstantes.unidade, unidade).then(function(result){
            $scope.limparForm();
            $("#modal").modal('show');
        }, function(error){
            console.log(error)
        })
    }
}
