angular.module('app').controller('gestaoTurmasCtrl',['$scope', '$state', 'apiService', 'apiConstantes',  gestaoTurmasCtrl])

function gestaoTurmasCtrl($scope, $state, apiService, apiConstantes){
    
    $scope.turmas = [];
    $scope.turmaSelecionada = {};
    $scope.qtdTurmas = 0;
    $scope.qtdAlunos = 0;
    $scope.qtdUnidades = 0;
    let arrayUnidades = [];
    
    function getTurmas(){
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.turma).then(function(result){
            console.log(result)
            $scope.turmas = result.data;
            calculaDadosDashboard(result.data);
        }, function(error){
            console.log(error)
        })
    }
    getTurmas();

    function calculaDadosDashboard(arrayTurmas){
        $scope.qtdTurmas = arrayTurmas.length;
        arrayTurmas.forEach(turma => {
            arrayUnidades.push(turma.unidade)
            $scope.qtdAlunos += turma.alunos.length
        });
        let arrayUnidadesUnicas = [...new Set(arrayUnidades.map(item => item.id))];
        $scope.qtdUnidades = arrayUnidadesUnicas.length
        //console.log($scope.qtdTurmas,  $scope.qtdUnidades, $scope.qtdAlunos)
    }

    $scope.abrirModalConfirmaInativacao = function(turma){
        $("#modalDetalheTurma").modal('hide');
        $scope.turmaSelecionada = turma;
        $("#modalConfirmaInativacao").modal('show');
    }

    $scope.inativarTurma = function(){
        $('#modalConfirmaInativacao').modal('hide')
        $('.modal-backdrop').remove()
        apiService.delete(apiConstantes.baseUrlAPI + apiConstantes.turma, $scope.turmaSelecionada.id).then(function(result){
            $scope.turmaSelecionada.ativo = false;
            console.log(result)
        }, function(error){
            console.log(error)
        })
    }

    $scope.ativarTurma = function(){
        $('#modalConfirmaInativacao').modal('hide')
        $('.modal-backdrop').remove()
        apiService.get(apiConstantes.baseUrlAPI + apiConstantes.ativarTurma, $scope.turmaSelecionada.id).then(function(result){
            console.log(result)
            $scope.turmaSelecionada.ativo = true;
        }, function(error){
            console.log(error)
        })
    }

    $scope.abrirModalDetalheTurma = function(turma){
        $scope.turmaSelecionada = turma;
        $("#modalDetalheTurma").modal('show');
    }

    $scope.getDiasDaSemanaFormatado = function(arrayDiasAula){
        let msgDiasAulas = ""
        if(arrayDiasAula){
            arrayDiasAula.forEach( (item, index, array) => {
                if(index === 0)
                    msgDiasAulas += diasSemanaEnum.properties[item.diaSemana].labelModal
                else if(index === array.length -1)    
                    msgDiasAulas += " e " + diasSemanaEnum.properties[item.diaSemana].labelModal
                else
                    msgDiasAulas += ", " + diasSemanaEnum.properties[item.diaSemana].labelModal    
            })
        }   
        return msgDiasAulas   
    }

    $scope.editarTurma = function(){
        $('#modalDetalheTurma').modal('hide')
        $('.modal-backdrop').remove()
        $state.go('novaturma', {turma :  $scope.turmaSelecionada})
    }

    $scope.irNovaTurma = function(){
        $state.go('novaturma')
    }
}