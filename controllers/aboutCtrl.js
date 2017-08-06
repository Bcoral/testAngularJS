angular.module('demoApp').controller('aboutCtrl', function($scope,$http,toaster) {

	Start();

	 $scope.formu = {};
	 $scope.ciudad = "Santiago";
   var ulr="http://api.openweathermap.org/data/2.5/weather?q=Santiago&units=metric&lang=es&APPID=";
   var appKey=config.APPID;

      
	$http.get(ulr+appKey).then(function(response){
      $scope.response = response.data;
	});

	$scope.buscar = function(formu) {
        $scope.formu = angular.copy(formu);
                
        if($scope.formu.ciudad != undefined && $scope.formu.ciudad !=""){
        	$http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.formu.ciudad+'&units=metric&lang=es&APPID='+appKey).then(function(response){
      		$scope.response = response.data;
      		$scope.ciudad = $scope.formu.ciudad;
      		
      		document.getElementById("txtBuscar").blur();
      		
		}, function errorCallback(response) {
			toaster.error("Error","No se ha podido encontrar resultados")
			});
        }else{
        	toaster.warning("","Complete campo de busqueda")
        }
      };

	function Start(){
    	document.getElementById("menu1").className = "";
		  document.getElementById("menu2").className = "active";
      document.getElementById("menu3").className = "";
    }
});