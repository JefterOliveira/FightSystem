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
