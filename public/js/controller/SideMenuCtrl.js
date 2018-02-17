angular.module('app').controller('sideMenuController',['$scope', '$state', sideMenuController])

function sideMenuController($scope, $state){
    
    function esconderCircleMenu(){
        $("#circleMenu").hide();
    }
   
    $scope.abrirCircleMenu = function(){
        $("#circleMenu").toggle();
        $("#sideMenu").hide();
    }
    
    function esconderSideMenu(){
        $(document).ready(function(){
            $("#sideMenu").hide();
        });
    }
    
    $scope.abrirSideMenu = function(){
        $("#sideMenu").toggle();
        $("#circleMenu").hide();
    }
    
    $(document).ready(function(){
        esconderCircleMenu();
        esconderSideMenu();
    })
    
    $scope.irNovaUnidade = function(){
        esconderCircleMenu()
        esconderSideMenu()
        $state.go('novaunidade')
    }

    $scope.irGestaoUnidades = function(){
        esconderCircleMenu()
        esconderSideMenu()
        $state.go('gestaounidades')
    }

    $scope.irNovaTurma = function(){
        esconderCircleMenu()
        esconderSideMenu()
        $state.go('novaturma')
    }

    $scope.irGestaoTurmas = function(){
        esconderCircleMenu()
        esconderSideMenu()
        $state.go('gestaoturmas')
    }
}


