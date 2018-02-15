angular.module('app').controller('novaUnidadeCtrl',['$scope', '$state', 'apiService', 'apiConstantes', novaUnidadeCtrl])

function novaUnidadeCtrl($scope, $state, apiService, apiConstantes){
    
    if($state.params.unidade){
        $scope.unidade = $state.params.unidade
        $('#imglogo')
            .attr('src', $scope.unidade.logo)
            .width(150)
            .height(200);
    } 
    else{
        $scope.unidade = {};
    }
        

    $scope.limparForm = function(){
        $scope.unidade = {};
    }
    
    $scope.fecharModal = function(){
        $("#modal").modal('hide');
        $('.modal-backdrop').remove()
    }
    
    $scope.irGestaoUnidades = function(){
        $scope.fecharModal();
        $state.go('gestaounidades');
    }

    $scope.imageToBase64 = function(){
        var foto = $('#upload-logo')[0].files[0];
        reader = new FileReader();

        reader.onloadend = function(e) {
            $('#imglogo')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
            $scope.unidade.logo = e.target.result;
        }

        reader.readAsDataURL(foto);
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

    $scope.alterarUnidade = function(unidade){
        unidade.telefone = unidade.telefone.replace(/[\D]+/g, '');
        apiService.put(apiConstantes.baseUrlAPI + apiConstantes.unidade, unidade).then(function(result){
            $scope.limparForm();
            $("#modal").modal('show');
        }, function(error){
            console.log(error)
        })
    }
}
