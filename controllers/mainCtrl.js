angular.module('demoApp').controller('mainCtrl', function($scope,$http,toaster,ngDialog) {
        
        var longitudArray=0;
        var fechaTemporal;
        var url="https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&maxlatitude=-17.644&minlatitude=-56.072&maxlongitude=-66.797&minlongitude=-76.465&orderby=time&limit=30";
        var finalArray=[];

        Start();

         $scope.clickToOpen = function () {
          ngDialog.open({ template: 'views/modals/modalHome.html', className: 'ngdialog-theme-default' });
          };

      
        $http.get(url).then(function(response){

          for (var i = 0; i < response.data.features.length; i++) {
            if(response.data.features[i].properties.place.substr(response.data.features[i].properties.place.length - 5) === "Chile"){
              finalArray.push(response.data.features[i].properties);
            }
          };

          $scope.response=finalArray;

    	}, function errorCallback(response) {
          toaster.error("Error","Error al conectar a servidor")
            console.log(response);
      });


    	function Start(){
        	document.getElementById("menu1").className = "active";
			   document.getElementById("menu2").className = "";
          document.getElementById("menu3").className = "";
      }
    });