angular.module('app').controller('sideMenuController',['$scope', '$state', sideMenuController])

function sideMenuController($scope, $state){
    
    $(document).ready(function(){
        $("#circleMenu").hide();
    });
    $("#openMenu").click(function(){
        $("#circleMenu").toggle();
        $("#sideMenu").hide();
    });

    $(document).ready(function(){
        $("#sideMenu").hide();
    });
    $("#openMenu2").click(function(){
        $("#sideMenu").toggle();
        $("#circleMenu").hide();
    });
    
}


