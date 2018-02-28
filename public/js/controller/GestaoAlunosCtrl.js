angular.module('app').controller('gestaoAlunosCtrl',['$scope', '$state', 'apiService', 'apiConstantes',  gestaoAlunosCtrl])

function gestaoAlunosCtrl($scope, $state, apiService, apiConstantes){
    
    $scope.alunos = [];
    $scope.qtdPendentes = 0;
    $scope.qtdAtivos = 0;
    $scope.qtdInativos = 0;

    function getAlunos(){
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.aluno).then(function(result){
            $scope.alunos = result.data;
            calculaDadosDashboard($scope.alunos)
        }, function(error){
            console.log(error)
        })
    }
    getAlunos();

    function calculaDadosDashboard(arrayAlunos){
        //to do
    }

    $scope.abrirModalFichaAluno = function(aluno){
        $scope.alunoSelecionado = aluno;
        $("#modal-ficha-aluno").modal("show");
    }

    $scope.irNovoAluno = function(){
        $state.go('novoaluno')
    }
    
}