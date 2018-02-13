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

    $scope.irNovaUnidade = function(){
        $state.go('novaunidade')
    }
}