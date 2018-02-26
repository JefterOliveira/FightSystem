angular.module('app').controller('novoAlunoCtrl',['$scope', '$state', 'apiService', 'apiConstantes', novoAlunoCtrl])

function novoAlunoCtrl($scope, $state, apiService, apiConstantes){
    
    $scope.descontos = [{valor: 0, label: 'Sem desconto'}, {valor: 10, label: '10%'}, {valor: 20, label: '20%'}, {valor: 50, label: '50%'}, {valor: 100, label: '100%'}]

    if($state.params.aluno){
        $scope.aluno = $state.params.aluno
        
    } 
    else{
        $scope.aluno = {};
        $scope.aluno.desconto = $scope.descontos[0];
    }
        
    function getCategorias(){
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.categoria).then(function(result){
            $scope.categorias = result.data;
        }, function(error){
            console.log(error)
        })
    }
    getCategorias();

    $scope.teste = function(){
        console.log($scope.aluno)
    }

    $scope.salvarAluno = function(aluno){
        console.log(aluno)
        apiService.post(apiConstantes.baseUrlAPI + apiConstantes.aluno, aluno).then(function(result){
            $scope.aluno = {}
            $("#modalAlunoSalvo").modal('show');
        }, function(error){
            console.log(error)
        })
    }
    
}
