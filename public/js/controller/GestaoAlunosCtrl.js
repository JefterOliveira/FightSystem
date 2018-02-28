angular.module('app').controller('gestaoAlunosCtrl',['$scope', '$state', 'apiService', 'apiConstantes',  gestaoAlunosCtrl])

function gestaoAlunosCtrl($scope, $state, apiService, apiConstantes){
    
    $scope.alunos = [];

    function getAlunos(){
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.aluno).then(function(result){
            console.log(result)
            $scope.alunos = result.data;
        }, function(error){
            console.log(error)
        })
    }
    getAlunos();

    $scope.irNovoAluno = function(){
        $state.go('novoaluno')
    }
    
}