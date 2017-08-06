angular.module('demoApp').controller('contactCtrl', function($scope,ngDialog,toaster) {
	Start();
	
	$scope.total=0;
	$scope.choices = [{id:1},{id:2}];

	$scope.calcular=function(nota,porcentaje){
		$scope.total=0;

		for (var i = 0; i < $scope.choices.length; i++) {
			$scope.total=$scope.total+($scope.choices[i].nota * ($scope.choices[i].porc/100));
		};

		if($scope.total===null || isNaN($scope.total) || $scope.total===undefined || $scope.total==0){
			toaster.warning("Advertencia","No se puede calcular promedio");
		}else{
			ngDialog.open({ template: 'views/modals/modalCalculadora.html', className: 'ngdialog-theme-default',scope: $scope });
		}	
	}

	$scope.addNewChoice = function() {
		if ($scope.choices.length >= 11){
			toaster.warning("Advertencia","Se alcanzó el maximo de campos posibles");
		}else{
			$scope.choices.push({id:$scope.choices.length+1});
		}
	};
    
	$scope.removeChoice = function() {
		if ($scope.choices.length == 2){
			toaster.warning("Advertencia","Se alcanzó el minimo de campos posibles");
		}else{
			var lastItem = $scope.choices.length-1;
			$scope.choices.splice(lastItem);
		}
	};

	function Start(){
        document.getElementById("menu1").className = "";
		document.getElementById("menu2").className = "";
		document.getElementById("menu3").className = "active";
    }
});