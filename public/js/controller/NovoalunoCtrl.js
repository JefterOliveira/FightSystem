angular.module('app').controller('novoAlunoCtrl',['$scope', '$state', 'apiService', 'apiConstantes', novoAlunoCtrl])

function novoAlunoCtrl($scope, $state, apiService, apiConstantes){
    
    $scope.descontos = [{valor: 0, label: 'Sem desconto'}, {valor: 10, label: '10%'}, {valor: 20, label: '20%'}, {valor: 50, label: '50%'}, {valor: 100, label: '100%'}]

    if($state.params.aluno){
        $scope.aluno = $state.params.aluno
        
    } 
    else{
        $scope.aluno = {};
        //$scope.aluno.desconto = $scope.descontos[0];
    }

    $scope.limparForm = function(){
        $scope.aluno = {};
    }
        
    function getCategorias(){
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.categoria).then(function(result){
            $scope.categorias = result.data;
        }, function(error){
            console.log(error)
        })
    }
    getCategorias();

    function prepararAluno(aluno){
        aluno.identidade = aluno.identidade.replace(/[\D]+/g, '')
        aluno.cpf = aluno.cpf.replace(/[\D]+/g, '')
        aluno.celular = aluno.celular.replace(/[\D]+/g, '')
        aluno.telefoneResidencial = aluno.telefoneResidencial ? aluno.telefoneResidencial.replace(/[\D]+/g, '') : null
        aluno.telefoneRecorrente = aluno.telefoneRecorrente ? aluno.telefoneRecorrente.replace(/[\D]+/g, '') : null
        aluno.telefoneComplementar = aluno.telefoneComplementar ? aluno.telefoneComplementar.replace(/[\D]+/g, '') : null
        aluno.telefoneContatoEmergencia1 = aluno.telefoneContatoEmergencia1.replace(/[\D]+/g, '')
        aluno.telefoneContatoEmergencia2 = aluno.telefoneContatoEmergencia2 ? aluno.telefoneContatoEmergencia2.replace(/[\D]+/g, '') : null
        return aluno
    }

    $scope.salvarAluno = function(aluno){
        aluno = prepararAluno(aluno)
        $("#modalAlunoSalvo").modal('show');
        apiService.post(apiConstantes.baseUrlAPI + apiConstantes.aluno, aluno).then(function(result){
            $scope.aluno = {}
            $("#modalAlunoSalvo").modal('show');
        }, function(error){
            console.log(error)
        })
    }

    $scope.alterarAluno = function(){
        
    }
    
}
