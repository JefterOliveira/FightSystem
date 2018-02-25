angular.module('app').controller('novoAlunoCtrl',['$scope', '$state', 'apiService', 'apiConstantes', novoAlunoCtrl])

function novoAlunoCtrl($scope, $state, apiService, apiConstantes){
    
    $scope.descontos = [{valor: 0, label: 'Sem desconto'}, {valor: 10, label: '10%'}, {valor: 20, label: '20%'}, {valor: 50, label: '50%'}, {valor: 1000, label: '100%'}]

    if($state.params.aluno){
        $scope.aluno = $state.params.aluno
        
    } 
    else{
        $scope.aluno = {};
        $scope.aluno.desconto = $scope.descontos[0];
        console.log($scope.aluno.desconto)
    }
        
    function getCategorias(){
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.categoria).then(function(result){
            $scope.categorias = result.data;
        }, function(error){
            console.log(error)
        })
    }
    getCategorias();

    
}
