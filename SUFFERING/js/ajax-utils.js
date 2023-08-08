(function (window){

	var ajaxUtils = {};

	function getRequestObject(){
		if (window.XMLHttpRequest){
			return(new XMLHttpRequest());
		}
		else if (window.ActiveXObject){
			return(new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			window.alert("Ajax is not supported");
			return(null);
		}
	}

	//Making an ajax get request to 'requestURL'

	ajaxUtils.sendGetRequest = function(requestURL, responseHandler){
		var request = getRequestObject();
		request.onreadystatechange = function(){
			handleResponse(request, responseHandler);
		};
		request.open("GET", requestURL, true);
		request.send(null);
	};

	function handleResponse(request, responseHandler){
		if ((request.readyState == 4) && (request.status == 200)){
			responseHandler(request);
		}
	}

	window.Utility = ajaxUtils;

})(window);