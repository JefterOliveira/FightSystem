angular.module('app').controller('gestaoUnidadesCtrl',['$scope', '$state', 'apiService', 'apiConstantes',  gestaoUnidadesCtrl])

function gestaoUnidadesCtrl($scope, $state, apiService, apiConstantes){
    
    $scope.unidades = [];
    $scope.qtdTurmas = 0;
    $scope.qtdAlunos = 0;
    
    function getUnidades(){
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.unidade).then(function(result){
            console.log(result)
            $scope.unidades = result.data;
            calculaDadosDashboard(result.data);
        }, function(error){
            console.log(error)
        })
    }
    getUnidades();

    function calculaDadosDashboard(arrayUnidades){
        $scope.qtdUnidades = arrayUnidades.length;
        arrayUnidades.forEach(unidade => {
            $scope.qtdTurmas += unidade.turmas.length
            unidade.turmas.forEach(turma =>{
                $scope.qtdAlunos += turma.alunos.length
            })
        });
    }

    $scope.getQuantidadeAlunosPorUnidade = function(turmas){
        let qtdAlunos = 0;
        turmas.forEach(turma => {
            qtdAlunos += turma.alunos.length
        })
        return qtdAlunos;
    }

    $scope.abrirModalDetalheUnidade = function(unidade){
        $scope.unidadeSelecionada = unidade;
        $("#modalDetalheUnidade").modal('show');
    }

    $scope.abrirModalConfirmaInativacao = function(unidade){
        $scope.unidadeSelecionada = unidade;
        $("#modalConfirmaInativacao").modal('show');
    }

    $scope.inativarUnidade = function(){
        $('#modalConfirmaInativacao').modal('hide')
        $('.modal-backdrop').remove()
        apiService.delete(apiConstantes.baseUrlAPI + apiConstantes.unidade, $scope.unidadeSelecionada.id).then(function(result){
            console.log(result)
        }, function(error){
            console.log(error)
        })
    }

    $scope.editarUnidade = function(){
        $('#modalDetalheUnidade').modal('hide')
        $('.modal-backdrop').remove()
        $state.go('novaunidade', {unidade :  $scope.unidadeSelecionada})
    }

    $scope.irNovaUnidade = function(){
        $state.go('novaunidade')
    }
}