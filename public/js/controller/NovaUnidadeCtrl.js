angular.module('app').controller('novaUnidadeCtrl',['$scope', '$state', 'apiService', 'apiConstantes', novaUnidadeCtrl])

function novaUnidadeCtrl($scope, $state, apiService, apiConstantes){
    
    if($state.params.unidade){
        $scope.unidade = $state.params.unidade
        let logosrc = $scope.unidade.logo + '?' + new Date().getTime();
        $('#imglogo')
            .attr('src', logosrc)
            .width(150)
            .height(200);
        
    } 
    else{
        $scope.unidade = {};
        $scope.temLogo = false;
    }
        

    $scope.limparForm = function(){
        console.log($scope.unidade);
        $scope.unidade = {};
        $('#imglogo')
            .attr('src', "#")
    }
    
    $scope.fecharModal = function(){
        $("#modal").modal('hide');
        $('.modal-backdrop').remove()
    }
    
    $scope.irGestaoUnidades = function(){
        $scope.fecharModal();
        $state.go('gestaounidades');
    }

    function imageToBase64(){
        if($('#upload-logo')[0].files[0]){
            var foto = $('#upload-logo')[0].files[0];
            reader = new FileReader();
    
            reader.onloadend = function(e) {
                $scope.unidade.logo = e.target.result;
                $('#imglogo')
                .attr('src', $scope.unidade.logo)
                .width(150)
                .height(200);           
            }
    
            reader.readAsDataURL(foto);
        }
    }

    $("#upload-logo").change(imageToBase64);
  
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
