// $(function(){
// 	$("button").blur(function(event){
// 		var screenWidth = window.innerWidth;
// 		if (screenWidth < 577) {
// 			$("#collapsable-nav").collapse('hide');
// 		}
// 	});
// });

document.addEventListener("DOMContentLoaded", function(event){
	document.querySelector("button").addEventListener("blur", function(event){
		var screenWidth = window.innerWidth;
		if (screenWidth < 577){
			document.querySelector("#collapsable-nav").collapse('hide');
		}
	});
});