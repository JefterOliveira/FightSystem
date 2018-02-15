angular.module('app').controller('novaTurmaCtrl',['$scope', '$state', 'apiService', 'apiConstantes', novaTurmaCtrl])

function novaTurmaCtrl($scope, $state, apiService, apiConstantes){
    
    $scope.unidades = [];
    $scope.cursos = [];
    $scope.turma = {};
    $scope.turma.diaAulaTurma = [];
    console.log(diasSemanaEnum);

    $scope.checkboxDias = {
        dias: false,
        TER: false,
        QUA: false,
        QUI: false,
        SEX: false,
        SAB: false,
        DOM: false
    }

    $scope.adicionaDiaAulaTurma = function(){
        for (var dia in $scope.checkboxDias) {
            if($scope.checkboxDias[dia]){
                $scope.turma.diaAulaTurma.push()
            }
        }
    }

    function getUnidades(){
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.unidade).then(function(result){
            $scope.unidades = result.data;
        }, function(error){
            console.log(error)
        })
    }

    function getCursos(){
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.curso).then(function(result){
            $scope.cursos = result.data;
        }, function(error){
            console.log(error)
        })
    }

    getUnidades();
    getCursos();
}
