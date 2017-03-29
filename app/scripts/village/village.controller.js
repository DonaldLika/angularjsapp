'use strict';

angular.module('app.villages')
  .controller('PostalController', function($scope, $location,VillageRestCall,NgTableParams) {

  		$scope.filterSearch={streetId:3};


  		VillageRestCall.listcityVillage().then(function(data){
  				$scope.dropDownCities=data.data;

  		});


      $scope.setSelected=function(selectedVar)
      {
        $scope.cityVillage=selectedVar;
        filterByCityVillage();
      }

      function filterByCityVillage()
      {
        
        VillageRestCall.listPostalCodes($scope.cityVillage.cityVillageId).then(function(data){
            $scope.cities=data.data;
            $scope.citiesTable=new NgTableParams({},{dataset:$scope.cities});
        });
      };


    //   $scope.$watch('cityVillageId', function() {
    //        filterByCityVillage();
    //  });


  });
